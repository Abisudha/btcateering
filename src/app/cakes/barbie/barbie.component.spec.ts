import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbieComponent } from './barbie.component';

describe('BarbieComponent', () => {
  let component: BarbieComponent;
  let fixture: ComponentFixture<BarbieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
