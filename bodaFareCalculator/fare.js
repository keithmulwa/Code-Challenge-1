let distanceInKm =prompt("Enter distance of trip in kilometres");
distanceInKm = Number(distanceInKm);

function calculateBodaFare(distanceInKm){
    const chargePerKm = 15;
    const baseFare = 50;

    const totalPrice = (chargePerKm*distanceInKm)+baseFare;
    const firstPrice = chargePerKm*distanceInKm

    console.log("Uko kwote? Io ni "+distanceInKm+" km:" );
    console.log("Ukikalia Pikipiki: KES "+baseFare);
    console.log("Mpaka Uko:KES "+firstPrice);
    console.log("Total:KES "+ totalPrice);

    console.log(" ")
      console.log("Panda Pikipiki!")
}
calculateBodaFare(distanceInKm);
