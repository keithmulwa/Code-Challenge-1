const user = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(user);

function calculateChaiIngredients(numberOfCups) {
    const water = 200;
    const milk = 50;
    const tealeaves = 1;
    const sugar = 2;

    const totalWater = numberOfCups * water;
    const totalMilk = numberOfCups * milk;
    const totalTeaLeaves = numberOfCups * tealeaves;
    const totalSugar = numberOfCups * sugar;

    console.log("To make " + numberOfCups + " cups of kenyan Chai,you will need:");
    console.log("Water: " + totalWater + " ml");
    console.log("Milk: " + totalMilk + " ml");
    console.log("Tea Leaves (Majani): " + totalTeaLeaves + " tablespoons");
    console.log("Sugar (Sukari): " + totalSugar + " teaspoons");
    console.log("");
    console.log("Enjoy your Chai Bora !");
}
calculateChaiIngredients(numberOfCups);
