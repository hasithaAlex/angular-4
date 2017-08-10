import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-com-02',
  templateUrl: './new-com-02.component.html',
  styleUrls: ['./new-com-02.component.css']
})
export class NewCom02Component implements OnInit {

  name:String;
  age:Number;

  address_01:{
    street:String,
    city:String,
    state:String
  }
  address_02:Address;

  string_01:String[]; 
  string_02:any[]; 


  constructor() { }

  ngOnInit() {
    this.name = "Alex";
    this.age = 27;

    this.address_01 = {
      street:"Rahula Road",
      city:"Matara",
      state:"southern province"
    }
    this.address_02 = {
      street:"Rahula Road 02",
      city:"Matara 02",
      state:"southern province 02"
    }

    this.string_01 = ["one","two"];
    this.string_02 = ["one","two",3];
  }
}

interface Address{
    street:String,
    city:String,
    state:String
}