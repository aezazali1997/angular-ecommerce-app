import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMonthlyComponent } from './categories-monthly.component';

describe('CategoriesMonthlyComponent', () => {
  let component: CategoriesMonthlyComponent;
  let fixture: ComponentFixture<CategoriesMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
