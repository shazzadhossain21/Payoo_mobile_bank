document.getElementById('add-money-box').addEventListener('click', function(){
    
 document.getElementById('cashOut').style.display = "none";
 document.getElementById('addMoney').style.display = "block";
})
document.getElementById('cash-out-box').addEventListener('click', function(){

    document.getElementById('cashOut').style.display = "block";
    document.getElementById('addMoney').style.display = "none"; 

})