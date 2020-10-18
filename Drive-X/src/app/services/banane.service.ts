import { Injectable } from "@angular/core";

@Injectable()

export class BananeService {
    
    fruit:string = "banane";

    constructor(){}
    
    getFruit(){
        console.log(this.fruit);
    }
}