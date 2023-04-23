import { Component, OnInit } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor(private prod:ProdserviceService){

  }

  records:any=[];
  ngOnInit() {
    
    this.prod.getProducts().subscribe(data=>{
     this.records = data;
     console.log(data)
    },error=>{
      console.log("Some Error...!")
    });
  }

}
