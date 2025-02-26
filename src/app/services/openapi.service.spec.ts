import { TestBed } from '@angular/core/testing';
import { OpenapiService } from './openapi.service';
import { HttpClient } from '@angular/common/http';

// executed on ng test by jasmine
// A suite in the context of testing, especially with frameworks like Jasmine, is a collection of related test cases.
// spec: A spec file contains test cases that verify the behavior and functionality of different parts of an Angular application, such as components, services, and directives.
describe('OpenapiService', () => { // describe creates group of specs/tests or suits
  let service: OpenapiService;
  


  beforeEach(() => { // callback method executed before running test cases to setup some conditions for test cases to run
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenapiService);


    // TestBed.configureTestingModule({});: The TestBed is a utility provided by Angular's testing framework to create and configure an Angular testing module. 
    // In this case, configureTestingModule is used to set up the testing environment with the necessary modules, declarations, and providers. 
    // Although it's currently empty, you would typically provide configurations here.
    // service = TestBed.inject(OpenapiService);: This line of code injects the OpenapiService into the test. The inject method retrieves an instance of the specified service from the Angular dependency injection system and assigns it to the service variable. 
    // This allows you to use the service in your test cases.
  });

  it('should be created', () => { // test case ; it defines a single spec where it has some expectations, when all expectations are met, test case is successful else it failed
    expect(service).toBeTruthy();
    // expect(service).toBeTruthy();: This is an expectation. It’s checking that the service instance is truthy (i.e., it exists and is not null or undefined). 
    // If the service is created successfully, this expectation will be met, and the test will pass. If the service is not created successfully, the test will fail.
  });

  it('should return observabe', () => { 
    expect(service.getallproductsfromapi()).withContext('observable is returned').toBeDefined();
    //The withContext method is used in Angular testing with the Jasmine framework to provide additional context to test failure messages. This can be particularly useful when you're running multiple tests and need more detailed information about which specific test or condition failed.
    // By adding context, you can make your test reports more informative and easier to debug.
  });
});
