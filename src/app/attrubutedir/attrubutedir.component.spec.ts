import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrubutedirComponent } from './attrubutedir.component';

describe('AttrubutedirComponent', () => {
  let component: AttrubutedirComponent;
  let fixture: ComponentFixture<AttrubutedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrubutedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrubutedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
