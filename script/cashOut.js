document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const accountNum = document.getElementById("account-num").value;
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234){
      const sub = convertedMainBalance  - convertedAmount ;
      document.getElementById('main-balance').innerText = sub;
     
      const transactionContainer = document.getElementById('transaction-container');
      const p = document.createElement('p');
      p.innerText = `
      Cashout ${convertedAmount} from ${accountNum} Account
      `
     transactionContainer.appendChild(p);
        
        
    }
    else{
        alert("no");
        
    }
})