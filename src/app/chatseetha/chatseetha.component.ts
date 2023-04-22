import { Component } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-chatseetha',
  templateUrl: './chatseetha.component.html',
  styleUrls: ['./chatseetha.component.css']
})
export class ChatseethaComponent {

  constructor(private srv:ChatservService){

  }
  msgs:any=[];
  sendmsg(textdata:any){
   this.msgs=this.srv.chat(textdata)
  }
  
}
