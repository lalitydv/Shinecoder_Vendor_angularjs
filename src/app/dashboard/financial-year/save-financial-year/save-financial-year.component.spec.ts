import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFinancialYearComponent } from './save-financial-year.component';

describe('SaveFinancialYearComponent', () => {
  let component: SaveFinancialYearComponent;
  let fixture: ComponentFixture<SaveFinancialYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFinancialYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFinancialYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
