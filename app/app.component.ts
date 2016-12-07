import { Component,Input } from '@angular/core';
import {Auth} from './services/auth.service';


@Component({
 selector: 'my-app',
 templateUrl: './app/app.component.html',
 styleUrls: ['./app/app.component.css']

})
export class AppComponent {
     
    home_class: string = "active";
    profile_class: string = "";
    messages_class: string = "";
    brojac: number = 1;
  

    
    constructor (){
    }

     onHomeClick(event) {
         if(this.home_class == "") {
             this.home_class ="active";
             this.profile_class ="";
             this.messages_class = "";
         } 
    }

    onProfileClick(event) {
         if(this.profile_class == "") {
             this.profile_class ="active";
             this.home_class = "";
             this.messages_class = "";
         } 
    }

    onMessagesClick(event) {
         if(this.messages_class == "") {
             this.messages_class ="active";
             this.profile_class ="";
             this.home_class = "";
         } 
    }

    onNotify(brojac:number){
        this.brojac = brojac;
        console.log("ajde");

    }
    

}
