import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCom02Component } from './new-com-02.component';

describe('NewCom02Component', () => {
  let component: NewCom02Component;
  let fixture: ComponentFixture<NewCom02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCom02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCom02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
