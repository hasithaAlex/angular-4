import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-com-03-events',
  templateUrl: './new-com-03-events.component.html',
  styleUrls: ['./new-com-03-events.component.css']
})
export class NewCom03EventsComponent implements OnInit {

  string_01:String[];

  constructor() { }

  ngOnInit() {
    this.string_01 = ["one","two"];
  }

  onClick(){
    this.string_01.push("tree");
  }

  addHobby(string){
    this.string_01.unshift(string);
    return false;
  }

  deleteBtn(string_){
    for (var index = 0; index < this.string_01.length; index++) {
      if (this.string_01[index]==string_) {
        this.string_01.splice(index,1);
      }
    } 
  }
}
