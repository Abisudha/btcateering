import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeviewComponent } from './cakeview.component';

describe('CakeviewComponent', () => {
  let component: CakeviewComponent;
  let fixture: ComponentFixture<CakeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
