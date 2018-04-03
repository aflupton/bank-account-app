function BankAccount(userName, balance){
  this.userName = userName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(num){
  return this.balance += num;
};

BankAccount.prototype.withdrawal = function(num){
  return this.balance -= num;
};

var newAccount;

$(document).ready(function( ) {
  // hide second form on page load
  $(".accountInfo").hide();

  $("form#nameGroup").submit(function(event) {
    event.preventDefault();
    // show second form on first submit
    $(".accountInfo").show();
  


    var nameInput = $("#nameInput").val();
    var initialDeposit = parseFloat($("#depoInput").val());

    newAccount = new BankAccount(nameInput, initialDeposit);
    console.log(newAccount);

    $("#balance").text(newAccount.balance)
    $("#name").text(newAccount.userName)
    $("#nameGroup").hide();

  });

  $("#depositSubmit").click(function(){
    var depositInput = parseFloat($("#depositInput").val())

    newAccount.deposit(depositInput);
    console.log(newAccount);
    $("#balance").text(newAccount.balance)
  });

  $("#withdrawalSubmit").click(function(){
    var withdrawalInput = parseFloat($("#withdrawalInput").val())

    newAccount.withdrawal(withdrawalInput);
    console.log(newAccount);
    $("#balance").text(newAccount.balance)


  });
});
