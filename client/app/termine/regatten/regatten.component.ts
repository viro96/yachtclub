import {Http} from '@angular/http';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {RegattenEventService} from '../../services/regattenevent.service';
import {ToastComponent} from '../../shared/toast/toast.component';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-regatten',
  templateUrl: './regatten.component.html',
  styleUrls: ['./regatten.component.css']
})
export class RegattenComponent implements OnInit {
  regattenevent = {};
  regattenevents = [];
  isLoading = true;
  isEditing = false;


  addRegattenEventForm: FormGroup;
  regattendate = new FormControl('', Validators.required);
  regattenthema = new FormControl('', Validators.required);
  regattenplace = new FormControl('', Validators.required);
  regattenguests = new FormControl('', Validators.required);


  constructor(private regatteneventService: RegattenEventService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) {
  }


  ngOnInit() {
    this.getRegattenEvents();
    this.addRegattenEventForm = this.formBuilder.group({
      regattendate: this.regattendate,
      regattenthema: this.regattenthema,
      regattenplace: this.regattenplace,
      regattenguests: this.regattenguests
    });
  }

  getRegattenEvents() {
    this.regatteneventService.getRegattenEvents().subscribe(
      data => this.regattenevents = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addRegattenEvent() {
    this.regatteneventService.addRegattenEvent(this.addRegattenEventForm.value).subscribe(
      res => {
        const newRegattenEvent = res.json();
        this.regattenevents.push(newRegattenEvent);
        this.addRegattenEventForm.reset();
        this.toast.setMessage('Event wurde erfolgreich erstellt', 'success');
      },
      error => console.log(error)
    );
  }

  enableRegattenEditing(regattenevent) {
    this.isEditing = true;
    this.regattenevent = regattenevent;
  }

  cancelEditing() {
    this.isEditing = false;
    this.regattenevent = {};
    this.toast.setMessage('Event bearbeiten abgebrochen', 'warning');
    // reload the events to reset the editing
    this.getRegattenEvents();
  }

  editRegattenEvent(regattenevent) {
    this.regatteneventService.editRegattenEvent(regattenevent).subscribe(
      res => {
        this.isEditing = false;
        this.regattenevent = regattenevent;
        this.toast.setMessage('Event erfolgreich bearbeitet', 'success');
      },
      error => console.log(error)
    );
  }

  deleteRegattenEvent(regattenevent) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.regatteneventService.deleteRegattenEvent(regattenevent).subscribe(
        res => {
          const pos = this.regattenevents.map(elem => {
            return elem._id;
          }).indexOf(regattenevent._id);
          this.regattenevents.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
