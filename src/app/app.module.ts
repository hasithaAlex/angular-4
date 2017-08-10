import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NewCom02Component } from './components/new-com-02/new-com-02.component';
import { NewCom03EventsComponent } from './components/new-com-03-events/new-com-03-events.component';

@NgModule({
  //all components inject here
  declarations: [
    AppComponent,
    UserComponent,
    NewCom02Component,
    NewCom03EventsComponent
  ],
  //modules inject here
  imports: [
    BrowserModule
  ],
  //all services inject here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
