import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


// Website Components
import { AppComponent } from './app.component';
import { FAQComponent } from './faq/faq.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {GalerieComponent} from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';
import {TeamComponent} from './team/team.component';
import {UeberComponent} from './ueber/ueber.component';
import {RegattaComponent} from './regatta/regatta.component';
import {TermineComponent} from './termine/termine.component';
import {AllgemeinComponent} from './termine/allgemein/allgemein.component';
import {JugendComponent} from './termine/jugend/jugend.component';
import {RegattenComponent} from './termine/regatten/regatten.component';
import {GastComponent} from './gaesteinfos/gast.component';
import {JugendabteilungComponent} from './jugendabteilung/jugendabteil.component';
import {GeschichteComponent} from './geschichte/geschichte.component';
import {SegelnComponent} from './segelnohneboot/segeln.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AdminComponent} from './admin/admin.component';
import {AccountComponent} from './account/account.component';
import {RegisterComponent} from './register/register.component';
import { ImageListComponent } from './galerie/gallerymain/image-list/image-list.component';
import { ImageComponent } from './galerie/gallerymain/image-list/image.component';
import { ImageDetailComponent } from './galerie/gallerymain/image-detail/image-detail.component';


// Modules
import {SharedModule} from './shared/shared.module';
import {RoutingModule} from './routing.module';

// Services
import {AuthService} from './services/auth.service';
import {AuthGuardAdmin} from './services/auth-guard-admin.service';
import {EventService} from './services/event.service';
import {YouthEventService} from './services/youthevent.service';
import {RegattenEventService} from './services/regattenevent.service';
import {UserService} from './services/user.service';
import {AuthGuardLogin} from './services/auth-guard-login.service';
import { ImageService } from './galerie/services/image.service';
import {RegattaResultService} from './services/regattaresult.service';





@NgModule({
  declarations: [
    AppComponent,
    FAQComponent,
    ImpressumComponent,
    GalerieComponent,
    HomeComponent,
    TeamComponent,
    UeberComponent,
    RegattaComponent,
    TermineComponent,
    AllgemeinComponent,
    JugendComponent,
    RegattenComponent,
    GastComponent,
    JugendabteilungComponent,
    GeschichteComponent,
    SegelnComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    YouthEventService,
    RegattenEventService,
    EventService,
    RegattaResultService,
    UserService,
    ImageService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
