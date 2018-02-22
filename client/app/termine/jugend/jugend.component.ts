import {Http} from '@angular/http';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {YouthEventService} from '../../services/youthevent.service';
import {ToastComponent} from '../../shared/toast/toast.component';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-jugend',
  templateUrl: './jugend.component.html',
  styleUrls: ['./jugend.component.css']
})
export class JugendComponent implements OnInit {
  youthevent = {};
  youthevents = [];
  isLoading = true;
  isEditing = false;


  addYouthEventForm: FormGroup;
  youthdate = new FormControl('', Validators.required);
  youththema = new FormControl('', Validators.required);
  youthplace = new FormControl('', Validators.required);
  youthguests = new FormControl('', Validators.required);


  constructor(private youtheventService: YouthEventService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent,
              public auth: AuthService) {
  }


  ngOnInit() {
    this.getYouthEvents();
    this.addYouthEventForm = this.formBuilder.group({
      youthdate: this.youthdate,
      youththema: this.youththema,
      youthplace: this.youthplace,
      youthguests: this.youthguests
    });
  }

  getYouthEvents() {
    this.youtheventService.getYouthEvents().subscribe(
      data => this.youthevents = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addYouthEvent() {
    this.youtheventService.addYouthEvent(this.addYouthEventForm.value).subscribe(
      res => {
        const newYouthEvent = res.json();
        this.youthevents.push(newYouthEvent);
        this.addYouthEventForm.reset();
        this.toast.setMessage('Event wurde erfolgreich erstellt', 'success');
      },
      error => console.log(error)
    );
  }

  enableYouthEditing(youthevent) {
    this.isEditing = true;
    this.youthevent = youthevent;
  }

  cancelEditing() {
    this.isEditing = false;
    this.youthevent = {};
    this.toast.setMessage('Event bearbeiten abgebrochen', 'warning');
    // reload the events to reset the editing
    this.getYouthEvents();
  }

  editYouthEvent(youthevent) {
    this.youtheventService.editYouthEvent(youthevent).subscribe(
      res => {
        this.isEditing = false;
        this.youthevent = youthevent;
        this.toast.setMessage('Event erfolgreich bearbeitet', 'success');
      },
      error => console.log(error)
    );
  }

  deleteYouthEvent(youthevent) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.youtheventService.deleteYouthEvent(youthevent).subscribe(
        res => {
          const pos = this.youthevents.map(elem => {
            return elem._id;
          }).indexOf(youthevent._id);
          this.youthevents.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
