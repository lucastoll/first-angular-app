import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselBasic } from './carousel.component';

describe('CarouselComponent', () => {
  let component: NgbdCarouselBasic;
  let fixture: ComponentFixture<NgbdCarouselBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdCarouselBasic ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdCarouselBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
