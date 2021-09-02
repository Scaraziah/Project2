"use strict"
const prompt = require('prompt-sync')();

let acct = require(`./account`);

let {balance, pin} = acct;

let passCode = 0;
let newBalance;

function validatePin(passCode){
    if(pin === passCode){
        console.log("This is the correct pin.")
        return true
    }
    return false;
}

function getBalance(){
    console.log(balance);
    }

function withdraw(){
let withdrawAmmount;
newBalance = balance
console.log(balance);
withdrawAmmount = parseInt(prompt("How much would you like."))
    if(withdrawAmmount > balance){
    console.log("You don't have enough funds.")
    }
    else{
    newBalance = newBalance - withdrawAmmount
    balance = newBalance
    return balance
    }
}

function deposit(){
    let depositAmmount;
    newBalance = balance
    console.log(balance);
    depositAmmount = parseInt(prompt("How much would you like to deposit."))
    newBalance = newBalance + depositAmmount
    balance = newBalance
    return balance
}


module.exports.balance = balance;
module.exports.pin = pin;
module.exports.passCode = passCode;
module.exports.newBalance = newBalance;
module.exports.valPin = validatePin;
module.exports.getBal = getBalance;
module.exports.takeMoney = withdraw;
module.exports.giveMoney = deposit;



