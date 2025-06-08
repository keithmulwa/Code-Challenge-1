let amountToSend = prompt("Unatuma ngapi?(KES):")
amountToSend=Number(amountToSend);
function estimateTransactionFee(amountToSend){
    let transCalc =0.015*amountToSend;

    if (transCalc <10){
        transCalc =10;
    }else if (transCalc >70){
        transCalc = 70;
    }

    let totalPay = amountToSend + transCalc;
    console.log("Sending KES "+amountToSend+":");
    console.log("Calculated Transaction Fee: KES "+transCalc);
    console.log("Total amount to be debited: KES "+totalPay );
console.log("");
console.log("Send Money Securely!");

}
estimateTransactionFee(amountToSend);