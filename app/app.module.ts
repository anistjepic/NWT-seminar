import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {ProfileComponent} from './profile/profile.component';
import {MessagesComponent} from './messages/messages.component';
import {Home_ProfileComponent} from './components/home_profile/home_profile.component';
import { routes} from './app.router';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './services/auth.service';



@NgModule({
 imports: [ BrowserModule, routes],
 declarations: [ AppComponent, HomeComponent,NotificationsComponent, ProfileComponent,MessagesComponent,Home_ProfileComponent ],
 bootstrap: [ AppComponent ],
 providers:[
     AUTH_PROVIDERS,
     Auth
 ]
 
})


export class AppModule { }
