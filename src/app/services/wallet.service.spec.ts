import { TestBed } from '@angular/core/testing';

import { WalletService } from './wallet.service';

describe('WalletService', () => {
  let service: WalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // positive test cases
  it('getbalance should return current balance', () => { // displayed in kernel
    expect(service.getBalance()).toBe(0);
  });

  it('addfunds should add the tested amount', () => {
    service.balance=50;
    expect(service.addfunds(50)).withContext('added new balance 50').toBe(100);

    expect(service.addfunds(100)).withContext('added new balance 100').toBe(100);
  });

  it('withdraw should remove the tested amount', () => {
    service.balance=50;
    expect(service.withdrawFunds(50)).withContext('retrive new balance').toBe(0);
  });

  // negative test cases
  it('withdraw should show error as funds less than balance', () => {
    service.balance=0;
    expect(()=>service.withdrawFunds(50)).withContext('get negative fund error').
    toThrowError("Insufficient funds");
  });
  
  it('addfunds should show error as amount added is negative', () => {
    service.balance=0;
    expect(()=>service.addfunds(-50)).withContext('get negative fund added error').
    toThrowError("Funds cant be negative");
  }); // when the testing function is known to throw error, collect the error using callback function
  

});
