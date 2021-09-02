"use strict"

const prompt = require('prompt-sync')();

const { balance } = require('./account');
let atm = require(`./atm`);
let {getBal, valPin, takeMoney, giveMoney} = atm;

function atmWork(){
    let menu = `1. To Withdraw \n 2. To Deposit \n 3. For Balance`;
    let passCode = parseInt(prompt("Enter Pin"));
    let userValidated = false;
    let userDone = false;
    do{
        userValidated = valPin(passCode);
    }while(!userValidated)
    do{

        let userImput = prompt(menu);
        switch(userImput){
            case "1":
                takeMoney();
                break;
            case "2":
                giveMoney();
                break;
            case "3":
                getBal();
                break;
            default:
                console.log("Invalid Imput");
        }
        userDone = areUDone();
    }while(!userDone)
    console.log("Your current Balance is");
    getBal();
}     
atmWork()


function areUDone(){
    let userImput = prompt("Are you done Yes or No.").toLowerCase();
    if(userImput === "yes"){
        return true
    }
    return false
}