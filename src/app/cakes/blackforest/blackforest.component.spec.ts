import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackforestComponent } from './blackforest.component';

describe('BlackforestComponent', () => {
  let component: BlackforestComponent;
  let fixture: ComponentFixture<BlackforestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackforestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackforestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
