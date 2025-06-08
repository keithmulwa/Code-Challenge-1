let amountToSend = prompt("Unatuma ngapi?(KES):")
// created a prompt too bad it can't work on the terminal
// You need an online compiler
amountToSend=Number(amountToSend);
//we are converting all strings to numbers just incase one writes two it will be 2
function estimateTransactionFee(amountToSend){//introduced a function to work code inside it
    let transCalc =0.015*amountToSend;
    //never put percentage always turn it into this format
//let variable to make changes ahead using the if statement
    if (transCalc <10){
        transCalc =10;
    }else if (transCalc >70){
        transCalc = 70;
    }
//basic stuff no need for explanation
    let totalPay = amountToSend + transCalc;
    console.log("Sending KES "+amountToSend+":");
    console.log("Calculated Transaction Fee: KES "+transCalc);
    console.log("Total amount to be debited: KES "+totalPay );
console.log("");
console.log("Send Money Securely!");

}
estimateTransactionFee(amountToSend);//closing the function