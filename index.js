const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl= document.getElementById('rates');
const swapEl=document.getElementById('swap');



//calculate

function calculate(){
 const currency_one= currencyEl_one.value;
 const currency_two=currencyEl_two.value;

 fetch(`https://v6.exchangerate-api.com/v6/a3c5e6c60f208f8bb1d3b60b/latest/${currency_one}`)
 .then(res => res.json())
 .then(data => {
    let rate=data.conversion_rates[currency_two];
    rateEl.innerHTML=`1 ${currency_one} = ${rate}  ${currency_two}`;

 amountEl_two.value= (rate * amountEl_one.value  ).toFixed(2);
 })

}

function swap(){
  let temp= currencyEl_one.value;
  currencyEl_one.value=currencyEl_two.value;
  currencyEl_two.value=temp;
  calculate();
}


// Event listeners

currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);

swapEl.addEventListener('click',swap);



