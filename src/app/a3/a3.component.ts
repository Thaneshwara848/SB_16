import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {

  constructor(private a3:CommonservService){

  }


  a3comonent(){
    //console.log("Hi A3 component with 100 lines of code ")
    this.a3.dblogic();
  }
}
