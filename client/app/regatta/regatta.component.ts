import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { RegattaResultService } from '../services/regattaresult.service';
import { ToastComponent } from '../shared/toast/toast.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-regatta',
  templateUrl: './regatta.component.html',
  styleUrls: ['./regatta.component.css']
})
export class RegattaComponent implements OnInit {

  event = {};
  events = [];
  isLoading = true;
  isEditing = false;


  addEventForm: FormGroup;
  regattaresultdate = new FormControl('', Validators.required);
  thema = new FormControl('', Validators.required);
  place = new FormControl('', Validators.required);
  result = new FormControl('', Validators.required);


  constructor(private eventService: RegattaResultService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent,
              public auth: AuthService) {  }


  ngOnInit() {
    this.getEvents();
    this.addEventForm = this.formBuilder.group({
      regattaresultdate: this.regattaresultdate,
      regattaresultthema: this.thema,
      regattaresultplace: this.place,
      regattaresultresult: this.result
    });
  }
  getEvents() {
    this.eventService.getRegattaResult().subscribe(
      data => this.events = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addEvent() {
    this.eventService.addRegattaResult(this.addEventForm.value).subscribe(
      res => {
        const newEvent = res.json();
        this.events.push(newEvent);
        this.addEventForm.reset();
        this.toast.setMessage('Ergebnis wurde erfolgreich erstellt', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(event) {
    this.isEditing = true;
    this.event = event;
  }

  cancelEditing() {
    this.isEditing = false;
    this.event = {};
    this.toast.setMessage('Ergebnis bearbeiten abgebrochen', 'warning');
    // reload the events to reset the editing
    this.getEvents();
  }

  editEvent(event) {
    this.eventService.editRegattaResult(event).subscribe(
      res => {
        this.isEditing = false;
        this.event = event;
        this.toast.setMessage('Ergebnis erfolgreich bearbeitet', 'success');
      },
      error => console.log(error)
    );
  }

  deleteEvent(event) {
    if (window.confirm('Wollen Sie dieses Ergebnis wirklich löschen?')) {
      this.eventService.deleteRegattaResult(event).subscribe(
        res => {
          const pos = this.events.map(elem => {
            return elem._id;
          }).indexOf(event._id);
          this.events.splice(pos, 1);
          this.toast.setMessage('Ergebnis erfolgreich gelöscht', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
