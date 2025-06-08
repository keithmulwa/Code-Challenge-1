const user = prompt("Karibu! How many cups of Chai Bora would you like to make?");
//created a prompt ..it's like a question the computer asks the user
const numberOfCups = Number(user);
//canges the strings to numbers

function calculateChaiIngredients(numberOfCups)//introduced functions
 {
    //just assigned values to these
    const water = 200;
    const milk = 50;
    const tealeaves = 1;
    const sugar = 2;
//calculations using arithmetic operators
    const totalWater = numberOfCups * water;
    const totalMilk = numberOfCups * milk;
    const totalTeaLeaves = numberOfCups * tealeaves;
    const totalSugar = numberOfCups * sugar;
//simple stuff 
    console.log("To make " + numberOfCups + " cups of kenyan Chai,you will need:");
    console.log("Water: " + totalWater + " ml");
    console.log("Milk: " + totalMilk + " ml");
    console.log("Tea Leaves (Majani): " + totalTeaLeaves + " tablespoons");
    console.log("Sugar (Sukari): " + totalSugar + " teaspoons");
    console.log("");
    console.log("Enjoy your Chai Bora !");
}
calculateChaiIngredients(numberOfCups);//closing the function
