import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  abc(){
    alert("Hi You Clicked the button...!")
  }
  user(uname:string){
    alert("Hiiiiiiiii "+uname)
  }
  add(a:string,b:string){
    const a1=parseInt(a);
    const b1=parseInt(b);

    alert(a1+b1)
  }
}
