import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookComponent } from './cakebook.component';

describe('CakebookComponent', () => {
  let component: CakebookComponent;
  let fixture: ComponentFixture<CakebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
