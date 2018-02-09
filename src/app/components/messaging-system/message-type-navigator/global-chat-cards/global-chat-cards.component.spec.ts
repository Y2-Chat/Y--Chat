import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChatCardsComponent } from './global-chat-cards.component';

describe('GlobalChatCardsComponent', () => {
  let component: GlobalChatCardsComponent;
  let fixture: ComponentFixture<GlobalChatCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalChatCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChatCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
