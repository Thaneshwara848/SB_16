import { Component } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-chatrama',
  templateUrl: './chatrama.component.html',
  styleUrls: ['./chatrama.component.css']
})
export class ChatramaComponent {

  
  constructor(private srv:ChatservService){

  }

  msgs:any=[];
  sendmsg(textdata:any){
   this.msgs=this.srv.chat(textdata)
  }
}
