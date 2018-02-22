import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { EventService } from '../../services/event.service';
import { ToastComponent } from '../../shared/toast/toast.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-allgemein',
  templateUrl: './allgemein.component.html',
  styleUrls: ['./allgemein.component.css']
})
export class AllgemeinComponent implements OnInit {

  event = {};
  events = [];
  isLoading = true;
  isEditing = false;


  addEventForm: FormGroup;
  date = new FormControl('', Validators.required);
  thema = new FormControl('', Validators.required);
  place = new FormControl('', Validators.required);
  guests = new FormControl('', Validators.required);


  constructor(private eventService: EventService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent,
              public auth: AuthService) {  }


  ngOnInit() {
    this.getEvents();
    this.addEventForm = this.formBuilder.group({
      date: this.date,
      thema: this.thema,
      place: this.place,
      guests: this.guests
    });
  }
  getEvents() {
    this.eventService.getEvents().subscribe(
      data => this.events = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addEvent() {
    this.eventService.addEvent(this.addEventForm.value).subscribe(
      res => {
        const newEvent = res.json();
        this.events.push(newEvent);
        this.addEventForm.reset();
        this.toast.setMessage('Event wurde erfolgreich erstellt', 'success');
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
    this.toast.setMessage('Event bearbeiten abgebrochen', 'warning');
    // reload the events to reset the editing
    this.getEvents();
  }

  editEvent(event) {
    this.eventService.editEvent(event).subscribe(
      res => {
        this.isEditing = false;
        this.event = event;
        this.toast.setMessage('Event erfolgreich bearbeitet', 'success');
      },
      error => console.log(error)
    );
  }

  deleteEvent(event) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.eventService.deleteEvent(event).subscribe(
        res => {
          const pos = this.events.map(elem => {
            return elem._id;
          }).indexOf(event._id);
          this.events.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
