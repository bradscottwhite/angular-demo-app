import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroServiceComponent } from './hero-service.component';

describe('HeroServiceComponent', () => {
  let component: HeroServiceComponent;
  let fixture: ComponentFixture<HeroServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
