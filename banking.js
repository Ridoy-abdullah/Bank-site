//handler deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmountText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositAmmountText);
    //total deposit
    const totalDeposit = document.getElementById('total-deposit');
    const currentDepositAmmount = totalDeposit.innerText;
    const newDepositTotal = parseFloat(currentDepositAmmount) + newDepositAmmount;
    totalDeposit.innerText = newDepositTotal;

    //update depost
    const totalBalance = document.getElementById('total-balance');
    const BalanceTotalText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(BalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;
    totalBalance.innerText = newBalanceTotal;

    //clean deposit input
    depositInput.value = '';
})
//handler withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmmounttext = withdrawInput.value
    const newWithdrawAmmount = parseFloat(withdrawAmmounttext)
    //set withdraw total
    const totalWithdraw = document.getElementById('total-withdraw')
    const previousWithdrawText = totalWithdraw.innerText
    const previousTotalWithdraw = parseFloat(previousWithdrawText)
    const newTotalWithdraw = previousTotalWithdraw + newWithdrawAmmount
    totalWithdraw.innerText = newTotalWithdraw
    //update balance

    const totalBalance = document.getElementById('total-balance')
    const previousBalanceText = totalBalance.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newTotalBalance = previousBalanceTotal - newWithdrawAmmount
    totalBalance.innerText = newTotalBalance;
    //clean withdraw input clean
    withdrawInput.value = '';
})

