console.log("Hello from app.js")
//const 


//if (click checking deposit){
//add moneyamount value to checking
//}

//if (click checking withdraw )


//when you click the deposit button you should add the 
//value in the field to the current balance

//This is creating the objects for the buttons
const checkingDepositButton = document.getElementById('checkingDepositButton')
const checkingWithdrawBUtton = document.getElementById('checkingWithdrawButton')
const savingsDespoitButton = document.getElementById('savingsDepositButton')
const savingsWithdrawButton = document.getElementById('savingsWithdrawButton')
const checkingBalance = document.getElementById('checkingBalance')
const savingsBalance = document.getElementById('savingsBalance')
const checkingInput = document.getElementById('checkingInput')
const savingsInput = document.getElementById('savingsInput')

savingsDespoitButton.addEventListener('click', function() {
    //add .value to balance.innerText
    //now I have to find a way to convert the innertext into a number
    //parseFloat will convert a sting value intot a number
    //---parseFloat(savingsBalance.innerText) +100
    //let savingsInt = parseFloat(savingsBalance.innerText)
    //savingsBalance.innerText = savingsInt
    //savingsInt = (savingsInt + 50)
    let savingsInt = parseFloat(savingsBalance.innerText)
    //then add the .value to the savings Int
    //and make it equil the savingsInt value so its saved
    savingsInt = (savingsInt + parseFloat(savingsInput.value))
    //then update the savingsBalance.innertext value
    savingsBalance.innerText = savingsInt
})

savingsWithdrawButton.addEventListener('click', function() {
    let savingsInt = parseFloat(savingsBalance.innerText)
    savingsInt = (savingsInt - parseFloat(savingsInput.value))
    savingsBalance.innerText = savingsInt
})

checkingDepositButton.addEventListener('click', function() {
    let checkingInt = parseFloat(checkingBalance.innerText)
    checkingInt = (checkingInt + parseFloat(checkingInput.value))
    checkingBalance.innerText = checkingInt
})

checkingWithdrawButton.addEventListener('click', function() {
    let checkingInt = parseFloat(checkingBalance.innerText)
    checkingInt = (checkingInt - parseFloat(checkingInput.value))
    checkingBalance.innerText = checkingInt
})