document.getElementById("login-btn").addEventListener('click', function (event) {
   event.preventDefault();
    const accountNum = document.getElementById("account-num").value;
   //  console.log(accountNum);
   const pinNum = document.getElementById("pin-num").value;
   // console.log(pinNum);
   const convertedPin = parseInt(pinNum);
   if(accountNum.length === 11){
      if(convertedPin=== 1234){
         window.location.href = "./main.html"
      }
      else{
         alert('Wrong pin')
         
      }
      
   }
   else{
      alert('Need valid account number.')
      
   }
    
})
