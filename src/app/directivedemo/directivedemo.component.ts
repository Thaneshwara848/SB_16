import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {

  abc:boolean= false;

  arr1=[1,4,2,4,5,76,5,3,5,6];
  emp=["Abi","Bindu","Chandu","Darshan"]
  fruit=["Apple","Banana","Chicko","Dates","Graps"]
  addfruit(newFruit:any){
    this.fruit.push(newFruit);
  }

  empdetails=[{"id":100,"Name":"Abi"},{"id":200,"Name":"SINDU"}]
  num=3;
}
