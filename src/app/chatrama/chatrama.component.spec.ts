import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatramaComponent } from './chatrama.component';

describe('ChatramaComponent', () => {
  let component: ChatramaComponent;
  let fixture: ComponentFixture<ChatramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
