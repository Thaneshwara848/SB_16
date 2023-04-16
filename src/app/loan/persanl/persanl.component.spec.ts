import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersanlComponent } from './persanl.component';

describe('PersanlComponent', () => {
  let component: PersanlComponent;
  let fixture: ComponentFixture<PersanlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersanlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersanlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
