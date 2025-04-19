document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const updateAmount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(updateAmount);
    // console.log(convertedAmount);
    const pin = document.getElementById('pin-num').value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(typeof mainBalance);
    const convertedMainBalance = parseFloat(mainBalance);
    
    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        
    }
    else{
        console.log('incorrect');
        
    }
    
    
})
