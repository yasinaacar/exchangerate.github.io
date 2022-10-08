const takeToInput= document.getElementById('input-area');
const calculate=document.getElementById('calculate-button');
const usdCard=document.getElementById('row-usd');
const eurCard=document.getElementById('row-eur')
const gbpCard=document.getElementById('row-gbp');
const dollarResult=document.getElementById('dollar-result')
const euroResult=document.getElementById('eur-result')
const sterlinResult=document.getElementById('gbp-result')


function showTryCard(){tryCard.style.display='block';};


function setCard(dataUSD,dataEUR,dataGBP){
        dollarResult.innerText= `${dataUSD}`;
        euroResult.innerText=dataEUR;
        sterlinResult.innerText=dataGBP;
}


function calculatRate(dataUSD, dataEUR, dataGBP){

    dollarResult.innerHTML=(takeToInput.value/dataUSD).toFixed(3);
    euroResult.innerHTML=(takeToInput.value/dataEUR).toFixed(3);
    sterlinResult.innerHTML=(takeToInput.value/dataGBP).toFixed(3);
    takeToInput.value='';
    
}
