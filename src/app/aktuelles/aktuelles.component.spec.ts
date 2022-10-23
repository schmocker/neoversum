import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuellesComponent } from './aktuelles.component';

describe('AktuellesComponent', () => {
  let component: AktuellesComponent;
  let fixture: ComponentFixture<AktuellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktuellesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktuellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
