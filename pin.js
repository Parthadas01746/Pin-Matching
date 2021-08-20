function getPin(){
    var randomNumber = Math.round(Math.random()* 10000);
    var randomNumberString = randomNumber + "";
   if(randomNumberString.length ==4){
    var showrandomNumber = document.getElementById("show-pin");
    showrandomNumber.value = randomNumber;
   }
   else{
       getPin()
   }
}
document.getElementById("calculator-body").addEventListener("click", function(event){
    var inputValue = event.target.innerText;
    var inputshow = document.getElementById("input-show");
    if(isNaN(inputValue)){
       if(inputValue =="C"){
        inputshow.value = "";
       }
       
    }
    else{
        var previousValue = document.getElementById("input-show").value;
    inputshow.value = previousValue + inputValue;
    }
})


document.getElementById("submit-btn").addEventListener("click", function(){
    var inputshow = document.getElementById("input-show").value;
    var showPin = document.getElementById("show-pin").value;
    var right = document.getElementById("right-pin");
    var wrong = document.getElementById("wrong-pin");
    if(showPin == inputshow){
        
        right.style.display = "block";
        wrong.style.display = "none";
    }
    else{
        wrong.style.display = "block";
        right.style.display = "none";
    }
})