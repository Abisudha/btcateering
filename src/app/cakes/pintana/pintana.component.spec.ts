import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PintanaComponent } from './pintana.component';

describe('PintanaComponent', () => {
  let component: PintanaComponent;
  let fixture: ComponentFixture<PintanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PintanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PintanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
