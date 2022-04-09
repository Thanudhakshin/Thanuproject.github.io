let totalValue = ''
function computeLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2); //calculate monthly payment

    //regedit to add a comma after every three digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    if(payment == 'NaN'|| payment == 'Infinity' || payment == '0.00'){
        noValue()
    }
    else{
        totalValue = `Monthly Payment = ${payment}`
       conversionDisplay();
    }
    
}
function bminavigate(){
    window.location = 'bmicalculator.html'
}
function heightcalculator(){
    window.location = 'height.html'
}
function noValue(){
    document.querySelector('#payment').innerHTML =  'Please enter the Missing Values' 
}
function conversionDisplay(){
    document.querySelector('#payment').innerHTML = totalValue; 
}
function clearall(){
    document.querySelector('#amount').value = ''
    document.querySelector('#interest_rate').value =''
    document.querySelector('#months').value =''
    document.querySelector('#payment').innerHTML =''
}