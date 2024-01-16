import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterscaramleComponent } from './butterscaramle.component';

describe('ButterscaramleComponent', () => {
  let component: ButterscaramleComponent;
  let fixture: ComponentFixture<ButterscaramleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButterscaramleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButterscaramleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
