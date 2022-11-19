document.getElementById('depositbtn-id').addEventListener('click',function(){
    console.log('clicked')
const inputDipositAmount=document.getElementById('deposit-money')
const newDipositAmountvalueText=inputDipositAmount.value;
const nweinputDipositAmountvalue=parseFloat(newDipositAmountvalueText);
const depositAmount=  document.getElementById('deposit-text')  
const currentDepositAmount=depositAmount.innerText;
const newDepositTotal=parseFloat(currentDepositAmount)+ (nweinputDipositAmountvalue); 
depositAmount.innerText=newDepositTotal;


const balanceMoney=document.getElementById('total-text');
const balanceMoneyText=balanceMoney.innerText;
const BalanceTotal=parseFloat(balanceMoneyText)
const newBalanceTotal=BalanceTotal+nweinputDipositAmountvalue;
balanceMoney.innerText=newBalanceTotal;




inputDipositAmount.value="";


})
document.getElementById('withdrawbtn-id').addEventListener('click',function (){
    const inputWithdrawAmount=document.getElementById('withdraw-money')

    const inputWithdrawAmountValueText=inputWithdrawAmount.value;
    const inputWithdrawAmountValue=parseFloat(inputWithdrawAmountValueText)
    const withdrawAmount=document.getElementById('withdraw-text');
    const currentWithdrawAmount=withdrawAmount.innerText;
    const newWithdrawTotal=parseFloat(currentWithdrawAmount)+(inputWithdrawAmountValue);
    withdrawAmount.innerText=newWithdrawTotal;

    const balanceMoney=document.getElementById('total-text');
const balanceMoneyText=balanceMoney.innerText;
const BalanceTotal=parseFloat(balanceMoneyText)
const newBalanceTotal=BalanceTotal-inputWithdrawAmountValue;
balanceMoney.innerText=newBalanceTotal;



    inputWithdrawAmount.value='';

})