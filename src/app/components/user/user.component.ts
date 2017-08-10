import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string = 'hasitha';

  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.name = 'Alex';
  }

}
