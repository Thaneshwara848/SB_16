import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatseethaComponent } from './chatseetha.component';

describe('ChatseethaComponent', () => {
  let component: ChatseethaComponent;
  let fixture: ComponentFixture<ChatseethaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatseethaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatseethaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
