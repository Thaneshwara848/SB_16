import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {

  constructor(private a1:CommonservService){

  }


  a1componet(){
   // console.log("Hi A1 Componet 100 lines of code ")
   this.a1.dblogic();
  }
}
