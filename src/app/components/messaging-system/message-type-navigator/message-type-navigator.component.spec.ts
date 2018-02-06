import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTypeNavigatorComponent } from './message-type-navigator.component';

describe('MessageTypeNavigatorComponent', () => {
  let component: MessageTypeNavigatorComponent;
  let fixture: ComponentFixture<MessageTypeNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTypeNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTypeNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
