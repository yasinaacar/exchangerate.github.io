fetch('https://hasanadiguzel.com.tr/api/kurgetir')
.then(response => response.json())
.then((data)=>{
    const dataUSD=data.TCMB_AnlikKurBilgileri[0].ForexSelling;
    const dataEUR=data.TCMB_AnlikKurBilgileri[3].ForexSelling;
    const dataGBP=data.TCMB_AnlikKurBilgileri[4].BanknoteBuying;

    window.addEventListener('load',setCard(dataUSD, dataEUR, dataGBP));

    
    calculate.addEventListener('click', ()=>{

        if(takeToInput.value===''){
            window.alert('Lütfen Dönüştürmek İstediğiniz Birim Parayı Giriniz: ')
        }
        else{
            calculatRate(dataUSD,dataEUR,dataGBP)
        }

    })
    
} )