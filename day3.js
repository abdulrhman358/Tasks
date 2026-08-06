/*
// Task 1
var fullName = prompt ("Enter your full Name:");

 fullName = fullName.trim();
 
 var realName = fullName.split(" ");

 for (var i = 0; i < realName.length; i++)
 {
realName[i] = realName[i][0].toUpperCase() +
 realName[i].slice(1).toLowerCase();
 }

var result =realName.join(" ");

var count = result.length ;

console.log(result);
console.log("Characters:", count);// هنا عد ال space 

// Task 2

  var email = prompt("Enter your email:");

if (
    email.includes("@") &&
    email.endsWith(".com") &&
    !email.startsWith("@") &&
    !email.includes(" ")
) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}

// Task 3

var text = prompt("Enter your text:");
var char = prompt("Enter your character: ");

text = text .toLowerCase();
char = char .toLowerCase();

var count = 0;
for ( var i=0 ;i < text .length;i++)
{
    if (text[i] === char) {
        count++;
    }
}
console.log (count);

// Task 4

var sentence = prompt("Enter Your sentence:");
var word = prompt("Enter your word :");
var result = sentence.replaceAll(word,"***");
console.log (result);


//Task 5

var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");

var username = firstName + "." + lastName;

username = username.toLowerCase();

username = username.replaceAll(" ", "");

username = username.slice(0, 15);

console.log(username);
 */
//Task 6
var sentence = prompt("Enter your sentence:");
var word = prompt("Enter a word to search for:");

var  exist = sentence.includes(word);

var firstPosition = sentence.indexOf(word);

var lastPosition = sentence.lastIndexOf(word);

var count = sentence.split(word).length - 1;// هنقسم الجمله array عند كل كلمه length هتعدوهطرح واحد عشان احنا عاوزين نعرف هي ظهرت كم مره اللي هي اللي عدد ال split وهنعد با

console.log(exist );
console.log(firstPosition);
console.log(lastPosition);
console.log(count);
//Task 7
 /* var sentence = prompt("Enter your sentence:");
var words = sentence.split(" ");
var result = "";
for (var i = 0; i < words.length; i++) {
*/ 
//Task 8
var text = prompt("Enter your text;");
var words = text.split(" ");

var wordsCount = words.length;
var characters = 0;
var vowels = 0;
var digits = 0;
var uppercase = 0;
var lowercase = 0;

var longestWord = words[0];
var shortestWord = words[0];

var vowelsChar = "aoieuAOIEU";


for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }
    
    if (currentWord.length < shortestWord.length) {
        shortestWord = currentWord;
    }
}

for (var i = 0; i < text.length; i++) {
    var char = text[i];

    if (char !== " ") {
        characters++;
    }


if (vowelsChar.includes(char)) {
        vowels++;
}

    if (vowelsChar.includes(char)) {
        vowels++;
    }

    if (char >= '0' && char <= '9') {
        digits++;
    } 
    else if (char >= 'A' && char <= 'Z') {
        uppercase++;
    } 
    else if (char >= 'a' && char <= 'z') {
        lowercase++;
    }
}

console.log("Words count: " + wordsCount);
console.log("Characters: " + characters);
console.log("Vowels: " + vowels);
console.log("Digits: " + digits);
console.log("Uppercase: " + uppercase);
console.log("Lowercase: " + lowercase);
console.log("Longest Word: " + longestWord);
console.log("Shortest Word: " + shortestWord);

// task 9
var phone = prompt("Enter phone number:");

var result = phone.slice(0, 4);

for (var i = 4; i < phone.length - 3; i++) {
    result += "*";
}

result += phone.slice(phone.length - 3);

console.log(result);
// task 10

var sentence = prompt("Enter a sentence:");
var  words = sentence.trim();
sentence = sentence.replaceAll(/javascript/gi, "JavaScript");

sentence = sentence[0].toUpperCase() + sentence.slice(1);

if (!sentence.endsWith(".")) {
    sentence += ".";
}

console.log(sentence);
