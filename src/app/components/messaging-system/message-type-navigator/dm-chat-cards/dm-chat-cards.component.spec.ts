import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmChatCardsComponent } from './dm-chat-cards.component';

describe('DmChatCardsComponent', () => {
  let component: DmChatCardsComponent;
  let fixture: ComponentFixture<DmChatCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmChatCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmChatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
