
// Task 1: Console Intro
console.log("JS is running successfully");

//Task 2: Start Alert
alert("ready to practice");

//Task 3,4,5,6
var productName = "Laptop";
var price = 15000;
var isAvailable = true;
var city = "Cairo";
var country = "Egypt";

console.log(productName, typeof productName);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);

document.getElementById("mainTitle").innerText = "Practice Time";

console.log(city + "," + country);

console.log(`${city},${country}`);

//Task 7: Shop Math
var quantity = 3;
var itemPrice = 120;

console.log("Total:", itemPrice + quantity);
console.log("Difference", 400 - (itemPrice * quantity));
console.log("Multiplication:", itemPrice * quantity);
console.log("Division:", itemPrice / quantity);
console.log("Modulus:", itemPrice % quantity);
console.log("Power:", 2 ** quantity);

//Task 8: Ask Favorite Color
var favoriteColor = prompt("What is your favorite color?");
console.log("Your favorite color is: " + favoriteColor);

//Task 9: Loose vs Strict
var score = 20;
var textScore = "20";

console.log(score == textScore); // هنا بنقارن القيمه بس من غير نوع الداتا
console.log(score === textScore);//هنا بنقارن القيمه ونوع البيانات

//Task 10: Convert Quantity
var x = prompt("Enter pieces:");
console.log(typeof Number(x));
console.log(typeof parseInt(x));
console.log(typeof +x);

//Task 11: Fruits List
var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

//Task 12: Course Object
var course = { title: "Mean Stack", hours: 120, level: "Advance" };
course.title = "Data analysis";
console.log(course.hours);
console.log(course);

//Task 13: Access Check

var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified); 
console.log(hasAccount || isVerified); 
console.log(!isVerified);              

//Task 14: Update Balance
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

//Task 15: Booking Summary
var hotelName = prompt("Hotel name?");
var nights = prompt("Number of nights?");
var isConfirmed = confirm("Is booking confirmed?");
var booking = `Hotel: ${hotelName}, Nights: ${nights}, Confirmed: ${isConfirmed}`;
alert(booking);
console.log(booking);


//Task 16: Predict the Output
console.log(2 + 8 + "0");//100 2+8=10 وهنحط ال 0 عشات string 
console.log("2" + 8 + 0);//280 string + num = string
console.log(2 + "8" + 0);//280 string + num = string


//Task 17: Copy Behavior
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2); // الناتج Alex Giza نسخناالقيمه بس


var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2);// الناتج الاتنين {brand: 'honda'}  عشان الاتنين نفس العنوان

var car1 = { brand: "Toyota" };
var car2 = Object.assign({}, car1);//
car2.brand = "Honda";
console.log(car1, car2);// الناتج  {brand: 'Honda'} {brand: 'Toyota'} بننسخ في مكان تاني مش هيأثرو علي بعض 

//Task 18: Mixed Bag
var mixedBag = ["Abdulrahman", 5, true, null, undefined, { id: 1 }, [1,2,3]];
console.log(typeof mixedBag[3]);// لما دورت طلع عشان ده خطأ من JS وال null خطأ مصلحهوش عشان المواقع القديمه نفضل شغاله

//Task 19: Order Message (IPO)
var clientName = prompt("Client Name?");
var orderPrice = +prompt("Order Price?");// ال + هنا عشان نحول ل number
var isConfirmed = confirm("Is it paid?");
var msg = `Client: ${clientName} , Price: ${orderPrice} , Paid: ${isConfirmed}`;
console.log(msg);
alert(msg);
document.getElementById("mainTitle").innerText = msg;// mainTitle = result بس عشان اللي فوق يشتغل


//Task 20: Two Numbers Report

var n1 = +prompt("First number?");
var n2 = +prompt("Second number?");
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${n1 / n2}`);
console.log(`${n1} % ${n2} = ${n1 % n2}`);
console.log(`${n1} ** ${n2} = ${n1 ** n2}`) 


/*
 //Task 21: Fix the Total
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e);// كده الناتج 90603030 عشان هيجمع 90 مع string عشان نصلحه يبقي 210 هنحول ال c ل رقم
*/

var a = 40;
var b = 50; 
var c = 60;
var d = 30;
var e = 30;
console.log(a + b + c + d + e);// 210


//Task 22: Invoice Line Function
function makeInvoiceLine(item, qty, paid) {
  return `Invoice => Item: ${item} | Qty: ${qty} | Paid: ${paid}`;}
  var item = prompt("Enter Item Name:");
var qyantity = +prompt("Enter Quantity:");
var paid = confirm("Is it paid?");

var finalInvoice = makeInvoiceLine(item, quantity, paid);
console.log(finalInvoice);
document.getElementById("mainTitle").innerText = finalInvoice;

//23,24,25 حاولت فيهم بس ال functions عندي مش احسن حاجه 
