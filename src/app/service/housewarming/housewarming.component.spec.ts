import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousewarmingComponent } from './housewarming.component';

describe('HousewarmingComponent', () => {
  let component: HousewarmingComponent;
  let fixture: ComponentFixture<HousewarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousewarmingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousewarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
