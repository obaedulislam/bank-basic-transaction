// Handle Deposit event handler
function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const newInputText = inputField.value;
  const newInputAmount = parseFloat(newInputText);

  //Clear Deposit Input
  inputField.value = "";

  return newInputAmount;
 
}

//Deposit withdraw total field
function updateTotalField(totalFieldId, newAmount){
  const totalField = document.getElementById(totalFieldId);
  const prevText = totalField.innerText;
  const prevAmount = parseFloat(prevText);

  const newTotalAmount = prevAmount + newAmount;

  totalField.innerText = newTotalAmount;
}

document.getElementById('deposit-btn').addEventListener('click', function(e){
  //Get the amount deposited
/*   
  const depositInput = document.getElementById('deposit-input');
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText); */

  const newDepositAmount = getInputValue('deposit-input');
  
  //Get & Updated Deposit Total
/*   
  const depositTotal = document.getElementById('deposit-total');
  const prevDepositText = depositTotal.innerText;
  const prevDepositAmount = parseFloat(prevDepositText);

  const newDepositTotal = prevDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal; */

  updateTotalField('deposit-total', newDepositAmount);



 // Updated Account Balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  const updatedBalance = newDepositAmount + balanceTotalAmount;
  balanceTotal.innerText = updatedBalance;



})



// Handle Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function(e){
  //Get New withdraw Amount
  /* 
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawText); */

  const newWithdrawAmount = getInputValue("withdraw-input");

    //Updated Withdraw Total
/*   
  const withdrawTotal = document.getElementById("withdraw-total");
  const prevWithdrawText = withdrawTotal.innerText;
  const prevWithdrawAmount = parseFloat(prevWithdrawText);

  const newWithdrawTotal = prevWithdrawAmount + newWithdrawAmount;
  withdrawTotal.innerText =  newWithdrawTotal; */

  updateTotalField('withdraw-total', newWithdrawAmount);
 // Updated Account Balance;
  const balanceTotal = document.getElementById('balance-total');
  const prevBalanceTotalText = balanceTotal.innerText;
  const prevBalanceTotalAmount = parseFloat(prevBalanceTotalText);
  const updatedBalance = prevBalanceTotalAmount - newWithdrawAmount;
  balanceTotal.innerText = updatedBalance;

  
})