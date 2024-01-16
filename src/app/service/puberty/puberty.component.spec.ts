import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubertyComponent } from './puberty.component';

describe('PubertyComponent', () => {
  let component: PubertyComponent;
  let fixture: ComponentFixture<PubertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
