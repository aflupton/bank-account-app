function BankAccount(userName, accountNumber, balance){
  this.userName = userName;
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(num){
  return this.balance += num;
};

BankAccount.prototype.withdrawal = function(num){
  return this.balance -= num;
};

$(document).ready(function( ) {


});
