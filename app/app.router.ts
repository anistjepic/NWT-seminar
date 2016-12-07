import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MessagesComponent} from './messages/messages.component';
import {Home_ProfileComponent} from './components/home_profile/home_profile.component';
 
export const router: Routes = [
    {path: '',  component:HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'notifications', component: NotificationsComponent},
    { path: 'profile', component: Home_ProfileComponent},
     { path: 'messages', component: MessagesComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);