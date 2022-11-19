document.getElementById('btn-id').addEventListener('click',function (){
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    const passField=document.getElementById('pass-id');
    const userPass=passField.value;
    

    if(userEmail == 'kamran@hasan.com' &&
userPass == 'kamran'){
   window.location.href='banking.html';
    
}

   
})
