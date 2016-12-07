import { Injectable }      from '@angular/core';

@Injectable()
export class My_timer{
    brojac: number;
    
    getBrojac(){
        return this.brojac;
    }
    setBrojac(brojac){
        this.brojac = brojac;
        console.log(brojac);
    }
}
