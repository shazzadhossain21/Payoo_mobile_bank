document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const updateAmount = document.getElementById('amount').value;
    const accountNum = document.getElementById("account-num").value;
    const convertedAmount = parseFloat(updateAmount);
    // console.log(convertedAmount);
    const pin = document.getElementById('pin-num').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(typeof mainBalance);
    const convertedMainBalance = parseFloat(mainBalance);
    
  if (updateAmount && pin){

    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;

        const transactionContainer = document.getElementById('transaction-container');
        const p = document.createElement('p');
        p.innerText = `
        Added ${convertedAmount} from ${accountNum} Account
        `
       transactionContainer.appendChild(p);
        











        
    }
    else{
        alert('Incorrect PIN')
        
        }
    }
    else{
        alert('Enter Amount')
    }   
    
    
})
