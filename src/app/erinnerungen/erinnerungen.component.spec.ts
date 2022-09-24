import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErinnerungenComponent } from './erinnerungen.component';

describe('ErinnerungenComponent', () => {
  let component: ErinnerungenComponent;
  let fixture: ComponentFixture<ErinnerungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErinnerungenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErinnerungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
