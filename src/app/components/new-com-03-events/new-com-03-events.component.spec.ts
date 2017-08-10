import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCom03EventsComponent } from './new-com-03-events.component';

describe('NewCom03EventsComponent', () => {
  let component: NewCom03EventsComponent;
  let fixture: ComponentFixture<NewCom03EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCom03EventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCom03EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
