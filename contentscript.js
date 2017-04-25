var url = document.location.hostname;
if(url != "freebitco.in"){alert("Error!");}
var stake = document.getElementById("double_your_btc_stake"); 
var multiplier = document.getElementById("double_your_btc_payout_multiplier"); 
var hiButton = document.getElementById("double_your_btc_bet_hi_button"); 
var loButton = document.getElementById("double_your_btc_bet_lo_button"); 
var winCaption = document.getElementById("double_your_btc_bet_win"); 
var losCaption = document.getElementById("double_your_btc_bet_lose"); 
var multpl = 1; 
var flag = false; 

function StartMine(Intrvl){
    stake.value = "0.0000000" + multpl; 
    multiplier.value = 2; 
    hiButton.click(); 

    var intr = setInterval(function() 
    { 
        if(winCaption.style.display == "block") 
        { 
            flag = !flag; 
            multpl = 1; 
            stake.value = "0.0000000" + multpl; 
        } 
        if(winCaption.style.display == "none") 
        { 
            multpl *= 2; 
            if(multpl < 10){stake.value = "0.0000000" + multpl;} 
            if(multpl > 10){stake.value = "0.000000" + multpl;} 
            if(multpl > 100){stake.value = "0.00000" + multpl;} 
            if(multpl > 1000){stake.value = "0.0000" + multpl;} 
            if(multpl > 10000){stake.value = "0.000" + multpl;} 
            if(multpl > 100000){stake.value = "0.00" + multpl;} 
            if(multpl > 1000000){stake.value = "0.0" + multpl;} 
            if(multpl > 10000000){stake.value = "0." + multpl;} 
        } 
        if(flag == false){hiButton.click();} 
        if(flag == true){loButton.click();} 
    } 
    ,Intrvl);
}