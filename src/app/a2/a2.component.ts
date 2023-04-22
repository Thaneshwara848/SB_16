import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private a2:CommonservService){}
  a2component(){
    //console.log("Hi A2 componet 100 lines of code ")
    this.a2.dblogic();
  }
}
