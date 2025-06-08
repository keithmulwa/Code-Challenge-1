let distanceInKm =prompt("Enter distance of trip in kilometres");//made a prompt it's like an input
distanceInKm = Number(distanceInKm);//converts strings to numbers

function calculateBodaFare(distanceInKm){
    //introduced a function
    const chargePerKm = 15;
    const baseFare = 50;
//calculations down here
    const totalPrice = (chargePerKm*distanceInKm)+baseFare;//js uses the BODMAS rule
    const firstPrice = chargePerKm*distanceInKm;

    console.log("Uko kwote? Io ni "+distanceInKm+" km:" );
    console.log("Ukikalia Pikipiki: KES "+baseFare);
    console.log("Mpaka Uko:KES "+firstPrice);
    console.log("Total:KES "+ totalPrice);

    console.log(" ")
      console.log("Panda Pikipiki!")
}
calculateBodaFare(distanceInKm);//closed the function always close the function!
