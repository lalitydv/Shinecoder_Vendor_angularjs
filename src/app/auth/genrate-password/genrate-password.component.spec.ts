import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratePasswordComponent } from './genrate-password.component';

describe('GenratePasswordComponent', () => {
  let component: GenratePasswordComponent;
  let fixture: ComponentFixture<GenratePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenratePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenratePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
