import { ComponentFixture, TestBed } from '@angular/core/testing'; //
import { LoginReactiveFormValidationComponent } from './login-reactive-form-validation.component';

/* 
ComponentFixture: A test fixture for debugging and testing a component.

TestBed: A utility that provides an Angular testing environment.

describe: A Jasmine function that groups related test cases.

component: A variable to hold an instance of the component.

fixture: A variable to hold the test fixture for the component.

beforeEach: A Jasmine function that runs before each test case. It's used to set up the testing environment.

async: Ensures that the test environment is set up asynchronously.

TestBed.configureTestingModule: Configures the testing module. Here, it imports the LoginReactiveFormValidationComponent.

compileComponents: Compiles the component's HTML, CSS, and TypeScript. This ensures that the component is error-free and ready for testing.

fixture = TestBed.createComponent: Creates an instance of the LoginReactiveFormValidationComponent within the test environment.

component = fixture.componentInstance: Assigns the created component instance to the component variable.

fixture.detectChanges(): Runs change detection to update the component's state and render its template.


*/

describe('LoginReactiveFormValidationComponent', () => {
  let component: LoginReactiveFormValidationComponent;
  let fixture: ComponentFixture<LoginReactiveFormValidationComponent>;

  beforeEach(async () => { // As html, css, Ts has to be compiled, test bench is configured async 
    await TestBed.configureTestingModule({
      imports: [LoginReactiveFormValidationComponent]
    })
    .compileComponents(); // checks for error free creation of component

    fixture = TestBed.createComponent(LoginReactiveFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct text in the <p> element', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p.textContent).toContain('login-reactive-form-validation works!');
  });
  
});
