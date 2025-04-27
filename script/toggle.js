document.getElementById('cashOut').style.display = "none";
document.getElementById('transaction-history').style.display = "none";


document.getElementById('add-money-box').addEventListener('click', function(){
    
 document.getElementById('cashOut').style.display = "none";
 document.getElementById('addMoney').style.display = "block";
 document.getElementById('transaction-history').style.display = "none";
})
document.getElementById('cash-out-box').addEventListener('click', function(){

    document.getElementById('cashOut').style.display = "block";
    document.getElementById('addMoney').style.display = "none"; 
    document.getElementById('transaction-history').style.display = "none";

})