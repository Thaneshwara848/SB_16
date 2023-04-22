import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatservService {

  constructor() { }

  mymsgs:any=[];
  chat(textdata:any){

    this.mymsgs.push(textdata);
    return this.mymsgs;

  }
}
