import { Component } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-ravana',
  templateUrl: './ravana.component.html',
  styleUrls: ['./ravana.component.css']
})
export class RavanaComponent {
  constructor(private srv:ChatservService){

  }
  msgs:any=[];
  sendmsg(textdata:any){
   this.msgs=this.srv.chat(textdata)
  }

}
