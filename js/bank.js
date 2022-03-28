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

// Balance Total
function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  return balanceTotalAmount;
}

//  Update Balance
function updatedBalance(newAmount, isAdd){

  // const balanceTotalText = balanceTotal.innerText;
  // const balanceTotalAmount = parseFloat(balanceTotalText);

  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalAmount = getCurrentBalance();
  if(isAdd == true){
  const updatedBalance =  balanceTotalAmount + newAmount;
    balanceTotal.innerText = updatedBalance;
  }
  else{
    const updatedBalance = balanceTotalAmount - newAmount;
      balanceTotal.innerText = updatedBalance;
  }
}

document.getElementById('deposit-btn').addEventListener('click', function(e){
  //Get the amount deposited
/*   
  const depositInput = document.getElementById('deposit-input');
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText); */
  
  //Get & Updated Deposit Total
/*   
  const depositTotal = document.getElementById('deposit-total');
  const prevDepositText = depositTotal.innerText;
  const prevDepositAmount = parseFloat(prevDepositText);

  const newDepositTotal = prevDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal; */



 // Updated Account Balance
/*  
   const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  const updatedBalance = newDepositAmount + balanceTotalAmount;
  balanceTotal.innerText = updatedBalance; */

  const newDepositAmount = getInputValue('deposit-input');
  if(newDepositAmount > 0){
  updateTotalField('deposit-total', newDepositAmount);
  updatedBalance(newDepositAmount, true);
  }
})

// Handle Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function(e){
  //Get New withdraw Amount
  /* 
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawText); */

    //Updated Withdraw Total
/*   
  const withdrawTotal = document.getElementById("withdraw-total");
  const prevWithdrawText = withdrawTotal.innerText;
  const prevWithdrawAmount = parseFloat(prevWithdrawText);

  const newWithdrawTotal = prevWithdrawAmount + newWithdrawAmount;
  withdrawTotal.innerText =  newWithdrawTotal; */

 // Updated Account Balance;
/*   
  const balanceTotal = document.getElementById('balance-total');
  const prevBalanceTotalText = balanceTotal.innerText;
  const prevBalanceTotalAmount = parseFloat(prevBalanceTotalText);
  const updatedBalance = prevBalanceTotalAmount - newWithdrawAmount;
  balanceTotal.innerText = updatedBalance; */

  const newWithdrawAmount = getInputValue("withdraw-input");
  const currentBalance = getCurrentBalance();
  if(newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance){
    updateTotalField('withdraw-total', newWithdrawAmount);
    updatedBalance(newWithdrawAmount, false);
  }
  if(newWithdrawAmount > currentBalance){
    console.log("You cant withdraw more than your current balance")
  }
})