

let fruits = ["apple", "strawberry", "cherry", "orange"];
//todo Variables can work as index
let one = 1;

console.log(fruits);
console.log(fruits[3]);
console.log(fruits[one]);

//todo Updating array Data
fruits[1] = "blueberries";
console.log(fruits);

let officeCharacters = ["Michael", "Jim", "Dwight"];
console.log(officeCharacters);

//todo .push adds new data at the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters);

//todo .pop removes the last item in the array
officeCharacters.pop()
console.log(officeCharacters)

//todo .unshift adds a new item to the front of the array

officeCharacters.unshift(2);
console.log(officeCharacters.length);

//todo .shift = removes the first item in the array
officeCharacters.shift();
console.log(officeCharacters);

//todo .length gives us the total number of items in an array
console.log(officeCharacters.length);

//todo Define an array of items
let items = ["apple", "bananna", "cherry", "date", "elderberry"];

//todo Access specific elements
let firstItem = items[1];
let thirdItem = items[3];
let lastItem = items[4];

//* Output the results
console.log("Items: " + items);
console.log("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);

//todo Define an array of favorite movies
//* Output each movie individually

let movies = ["Hancock", "Man of Steel", "Pursuit of Happiness", "Fast and Furious", "2 fast 2 Furious", "Taken"];

let firstMovie = movies[0];
let secondMovie = movies[1];
let thirdMovie = movies[2];
let fourthMovie = movies[3];
let fifthMovie = movies[4];

//*output
console.log("Movies: " + movies);
console.log("Movie 1: " + firstMovie);
console.log("Movie 2: " + secondMovie);
console.log("Movie 3: " + thirdMovie);
console.log("Movie 4: " + fourthMovie);
console.log("Movie 5: " + fifthMovie);

//todo Define an array of elements
//todo Calcuate sum of the numbers
//*Output the result

let numbers = [25, 50, 25, 65, 35];

let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

console.log(sum);

//todo define an array of strings
let words = ["There are", "only happy accidents!", " no mistakes"];

let sentence = words[0] + words[1] + words[2]

console.log(sentence)

//todo define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"]
//? green to cyan
//? purple to orange
//*Output the results

colors[2] = "cyan";
colors[4] = "orange";
console.log(colors);

//? Random Numbers
let rng = Math.floor(Math.random() * Math.floor(colors.length));

//todo Conditions
let boo = true;
console.log(boo);
let bar = 5 - 1;
console.log(bar);

//todo strictly equals to "==="
let boo2 = "4";
let boo3 = 4;
let boo4 = "four"
console.log(boo2 === boo3);

//todo not equal to "!="
console.log(boo3 != boo4);
//! TRUE

//todo Greater than ">"
console.log(boo3 > 6);
//! FALSE

//todo Greather than or equal to ">="
console.log(boo3 >= 5);
//! FALSE

//todo Less than or equal to "<="
console.log(boo3 <= 5)
//! TRUE

//todo Logical Operators
//todo AND = "&&"
console.log( "double ampersans: " + (4 == 4 && 3 == 3));

//todo OR = "||"
console.log("Double Lines: " + (4 == 3 || 3==3));

//todo NOT = "!"
console.log("NOT: " + (!true));

//todo If structure
if (boo3 == 4) {
    console.log("HEY I'M THE NUMBER 4");
};

//todo if else structure
let amHungry = true;

if (amHungry) {
    console.log("Let's eat! I want chicken nuggies!");
} else {
    console.log("Lets chill instead, and keep coding!");  
} 

//todo else if structure

let howHungry = 50;

if (amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry i could eat a horse.");
}
else if (amHungry === true && howHungry >= 25) {
    console.log("I'm Hungry enough to eat cheez-itz");
}
else if (amHungry === false && howHungry >= 25) {
    console.log("I'm depressed");
}
else {
    console.log("I am not hungry!");
}

//todo SWITCH statement
switch (amHungry == true) {
    case howHungry >= 75:
        console.log("I'm so hungry i could eat a horse.");
        break;
    case howHungry >= 25:
        console.log("I'm Hungry enough to eat cheez-itz");
        break;
    default:
        console.log("I just wanna eat.");
}

//! Favorite fruit checker
//todo define an array of favorite fruits
//todo define a variable for the fruit to check
//* Check if the fruit is in the array and output the result

let favFruits = ["orange", "mango", "blueberrie", "lemon", "strawberry"];

let checkerFruit = "mango";

if (checkerFruit == favFruits[0] || checkerFruit == favFruits[1] || checkerFruit == favFruits[2] || checkerFruit == favFruits[3] || checkerFruit == favFruits[4]) {
    console.log("This is one of my favorite fruits!");
}
else {
    console.log("This is not one of my favorite fruit!")
}

//! Grade Categorizer
//todo Define a variable for the grade
//todo Categorize the grade
//* Output the result

let score = 50;

if (score >= 90 && score <= 100) {
    console.log("You got an A!");
}
else if (score >= 80 && score <= 89) {
    console.log("You got a B!");
}
else if (score >= 70 && score <= 79) {
    console.log("You got a C!");
}
else if (score >= 60 && score <= 69) {
    console.log("You got a D!");
}
else {
    console.log("You got an F!");
}

//! Day of the Work Checker
//todo Define an array of days of the week
//todo Define a variable for the day to check
//todo Check if the day is a weekday or weekend
//*output the result

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = "Saturday";

if (day == daysOfWeek[1] || day == daysOfWeek[2] || day == daysOfWeek[3] || daysOfWeek == daysOfWeek[4] || daysOfWeek == daysOfWeek[5]) {
    console.log("This is a weekday!" + " " + day);
}
else if (day == daysOfWeek[0] || day == daysOfWeek[6]) {
    console.log("This is a weekend day!" + " " + day);
}
else {
    console.log("This day doesnt exist buddy.")
};

//! Temperature Checker
//todo Define a variable for the temperature
//todo categorize the temperature and 
//* output the result

let temp = 20;

let goodWeather = "This is fantastic weather around 75 Degrees";
let okayWeather = "This is okay weather around 85 Degrees";
let hotWeather = "This is unbearing weather 87+ Degrees";

if (temp >= 70 && temp <= 80) {
    console.log(goodWeather);
}
else if (temp >= 83 && temp <= 86) {
    console.log(okayWeather);
}
else if (temp >= 87 && temp <= 95)
{
    console.log(hotWeather);
}
else if (temp <= 60) {
    console.log("It's cold as hellllllllll")
}
else {
    console.log("You live in a volcano bro")
}

//! Number Sign Checker
//todo Define a variable for the number
//todo Check the sign of the number
//* output the result

let number = 0;

if (number < 0) {
    console.log("This is a negative number!");
}
else if (number == 0) {
    console.log("This number is 0");
}
else {
    console.log("This is a positive number!");
};