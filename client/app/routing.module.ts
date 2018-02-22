import {Routes, RouterModule} from '@angular/router';
import {GalerieComponent} from './galerie/galerie.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {FAQComponent} from './faq/faq.component';
import {UeberComponent} from './ueber/ueber.component';
import {TeamComponent} from './team/team.component';
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
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';


const routes: Routes =  [
    {path: 'home', component: HomeComponent },
    {path: 'galerie', component: GalerieComponent},
 //   {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'faq', component: FAQComponent},
    {path: 'ueber', component: UeberComponent},
    {path: 'team', component: TeamComponent},
    {path: 'regatta', component: RegattaComponent},
    {path: 'termine', component: TermineComponent},
    {path: 'termine/allgemein', component: AllgemeinComponent},
    {path: 'termine/jugend', component: JugendComponent},
    {path: 'termine/regatten', component: RegattenComponent},
    {path: 'gast', component: GastComponent},
    {path: 'jugendabteilung', component: JugendabteilungComponent},
    {path: 'geschichte', component: GeschichteComponent},
    {path: 'segelnohneboot', component: SegelnComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'account', component: AccountComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'logout', component: LogoutComponent}
];

@NgModule ({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule],
})
export class RoutingModule {}
