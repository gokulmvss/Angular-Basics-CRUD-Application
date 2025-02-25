import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveFormValidationComponent } from './login-reactive-form-validation.component';

describe('LoginReactiveFormValidationComponent', () => {
  let component: LoginReactiveFormValidationComponent;
  let fixture: ComponentFixture<LoginReactiveFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginReactiveFormValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginReactiveFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
