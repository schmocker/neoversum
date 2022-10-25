import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSliderComponent } from './photo-slider.component';

describe('PhotoSliderComponent', () => {
  let component: PhotoSliderComponent;
  let fixture: ComponentFixture<PhotoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
