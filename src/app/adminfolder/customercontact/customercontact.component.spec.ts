import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercontactComponent } from './customercontact.component';

describe('CustomercontactComponent', () => {
  let component: CustomercontactComponent;
  let fixture: ComponentFixture<CustomercontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
