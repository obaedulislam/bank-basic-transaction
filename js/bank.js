// Handel Deposit event handler
function getInputValue(){
  const depositInput = document.getElementById('deposit-input');
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText);

    //Clear Deposit Input
  depositInput.value = "";

  return newDepositAmount;


}
document.getElementById('deposit-btn').addEventListener('click', function(e){
  //Get the amount deposited
  // const depositInput = document.getElementById('deposit-input');
  // const newDepositText = depositInput.value;
  // const newDepositAmount = parseFloat(newDepositText);

  const newDepositAmount = getInputValue();
  
  //Updated Balance Total
  const depositTotal = document.getElementById('deposit-total');
  const prevDepositText = depositTotal.innerText;
  const prevDepositAmount = parseFloat(prevDepositText);

  const newDepositTotal = prevDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal;



 // Updated Account Balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  const updatedBalance = newDepositTotal + balanceTotalAmount;
  balanceTotal.innerText = updatedBalance;



})



// Handle Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function(e){
  //Get New withdraw Amount
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawText);

    //Updated Withdraw Total
  const withdrawTotal = document.getElementById("withdraw-total");
  const prevWithdrawText = withdrawTotal.innerText;
  const prevWithdrawAmount = parseFloat(prevWithdrawText);

  const newWithdrawTotal = prevWithdrawAmount + newWithdrawAmount;
  withdrawTotal.innerText =  newWithdrawTotal;

 // Updated Account Balance;
  const balanceTotal = document.getElementById('balance-total');
  const prevBalanceTotalText = balanceTotal.innerText;
  const prevBalanceTotalAmount = parseFloat(prevBalanceTotalText);
  const updatedBalance = prevBalanceTotalAmount - newWithdrawAmount;
  balanceTotal.innerText = updatedBalance;


  //Clear withdraw Input
  withdrawInput.value = "";

  
})