import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorenComponent } from './sponsoren.component';

describe('SponsorenComponent', () => {
  let component: SponsorenComponent;
  let fixture: ComponentFixture<SponsorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
