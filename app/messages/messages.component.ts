import {Component, Output, EventEmitter} from '@angular/core';
import {Auth} from '../services/auth.service';
import {My_timer} from '../services/my_timer.service';


@Component({
    selector: 'app-messages',
    templateUrl: './app/messages/messages.component.html',
    styleUrls: ['./app/messages/messages.component.css'],
    providers: [My_timer]

})
export class MessagesComponent{
    @Output() notify : EventEmitter<number> = new EventEmitter<number>();
    my_class : any;
    brojac: number = 5;
    brojacService: My_timer;

   

    private onClick(){
        this.my_class = "viewed";
        if(this.brojac > 0){
             this.brojac --;
             
             
        }
        this.notify.emit(this.brojac);
        console.log(this.brojac);
    }

    
}