import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonservService {

  constructor() { }
  dblogic(){
    console.log("Hi Fronm Service  100 lines of code ")
  }
}
