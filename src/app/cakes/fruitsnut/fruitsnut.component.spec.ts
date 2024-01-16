import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsnutComponent } from './fruitsnut.component';

describe('FruitsnutComponent', () => {
  let component: FruitsnutComponent;
  let fixture: ComponentFixture<FruitsnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsnutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitsnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
