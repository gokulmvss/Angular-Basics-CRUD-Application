import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  balance:number=0;
  constructor() { }

  addfunds(amount:number):number{
    if(amount<0){
      throw new Error('Funds cant be negative')
    }
    this.balance=this.balance+amount;
    return this.balance;
  }

  withdrawFunds(amount:number):number{
    if(amount>this.balance){
      throw new Error('Insufficient funds')
    }
    this.balance=this.balance-amount;
    return this.balance;
  }

  getBalance():number{
    return this.balance;
  }
}
