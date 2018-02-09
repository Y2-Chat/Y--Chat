import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatCardsComponent } from './group-chat-cards.component';

describe('GroupChatCardsComponent', () => {
  let component: GroupChatCardsComponent;
  let fixture: ComponentFixture<GroupChatCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChatCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
