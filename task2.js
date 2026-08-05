// day1 task1
//Task 1: Using console.log() and Variables

var string ="Abdulrahman";
var number = 1234;
var boolean  = true ;
var Null = null; 
var undefiend;


console.log(string);
console.log(number);
console.log(boolean);
console.log(Null);
console.log(undefiend);

console.log( typeof string);
console.log( typeof number);
console.log( typeof boolean);
console.log( typeof Null);
console.log( typeof undefiend);

var firstName = "Abdulrahman";
var lastName = "hegazi";

var fullNameOld = firstName + " " +lastName

console.log (fullNameOld);

var fullNameModern = `${firstName} ${lastName}`;

console.log (fullNameModern);

//Task 2: Working with Data and Basic Validation
var username = "Abdulrahman";
var password = "mohamedsalah";

if (username === "") {
     alert("Username is required");
}
else if (password.length < 8) {
     alert("Password must be at least 8 characters");
}
else {
    console.log("Username:", username);
    console.log("Password:", password);
}


//task2 Objective: Build a program to evaluate employees based on multiple criteria (such as: years of experience, work performance, and overall rating).

var empName = prompt ("Enter employee name:");
var empAge = prompt("Enter employee age:");
var expYears = +prompt("Enter years of experience:");
var selfRating = +prompt ("Rate yourself out of 10:");



var jobCategory ="";
if (expYears < 2) {
    jobCategory = "Junior";
    } 
    else if (expYears >= 2 && expYears <= 5) {
    jobCategory = "Mid-Level"; 
} 
else if (expYears > 5 && expYears <= 10) {
    jobCategory = "Senior";
} 
else {
    jobCategory = "Expert"; 
}



let performance = "";

switch (true) {
    case (selfRating >= 9):
        performance = "Excellent";
        break;
        case (selfRating >= 7 && selfRating <= 8):
        performance = "Good";
        break;
        case (selfRating >= 5 && selfRating <= 6):
        performance = "Average";
        break;
    case (selfRating < 5):
        performance = "Needs Improvement";
        break;
        default:
        performance = "ERROR";
}

var baseSalary = +prompt("Enter your base salary:");
var bonusPercentage = 0;

if (expYears >= 0 && expYears <= 2) {
    bonusPercentage = 0.10;
}
else if (expYears >= 3 && expYears <= 5) {
    bonusPercentage = 0.15;
} 
else if (expYears > 5) {
    bonusPercentage = 0.20;
}
var bonusValue = baseSalary * bonusPercentage;
var finalSalary = baseSalary + bonusValue;

var currentHour = new Date().getHours(); 
var shift = "";

if (currentHour >= 9 && currentHour < 18) {
    shift = "Day shift";
}
else {
    shift = "Night shift";
}

var result =` Employee Name:${empName}
Job Category: ${jobCategory}
Performance Level: ${performance}
Shift: ${shift}
Final Salary: ${finalSalary}
`;
console.log (result);
alert(result);

document.getElementById("Report").innerText = result;
