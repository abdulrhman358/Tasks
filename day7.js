/*
// part A,1 
function testWithoutStrict() {
    x = 10;
}
testWithoutStrict();
console.log(x);

//outout: 10
//عشان نستخدمناش  var , let , const ,عملنا متغير اسمه x

//part A,2

function testWithStrict() {
    "use strict";
    
    try {
        y = 10;

    } catch (error) {
        console.log(error.message);
    }
}
testWithStrict();


// output; y is not defined عشان مفيش متغيير من غير declartion

//part A,3

function strictDelete() {
    "use strict";

    var localVar = "test";

    try {
       delete localVar;
    } catch (error) {
        console.log(error.message);
    }

    var obj = {
        name: "Ahmed"
    };

    delete obj.name;

    console.log(obj);
}
strictDelete();
 // output:SyntaxError مينفعش نحذف متغير متعرف ب  var داخل ال strict mode


 //part B,1
 
 
console.log(x);
var x = 10;
console.log(x);

// Output:
// undefined
// 10



// var يتم عمل hoisting للـ declaration فقط.


//partB,5

// Case 1
 sayHi();
  function sayHi() {
     console.log("Hi");
     }

    //output: Hi 
    // Function declaration يتم عمل hoisting لها بالكامل



// Case 2
  sayBye();
  var sayBye = function () {
  console.log("Bye"); };

// Output: TypeError: sayBye is not a function
// ال function expression مش بيتعمله hoisting




//partB,6
console.log(a);
let a = 5;

// Output: ReferenceError: Cannot access 'a' before initialization
// ال let بتبقي في ال TDZ مبنوصلهاش قبل التعريف

*/

//partB,7

var n = 1;

function demo() {
    console.log(n);

    var n = 2;

    console.log(n);
}

demo();

console.log(n);

// Output:
// undefined
// 2
// 1

// ال var n اللي جوه ال  function  حصلها  hoisiting  فبدا ب  undefined بعدين 2 والاخير زي ما هو ب 1

// part C,1

function testVarScope() {
    if (true) {
        var x = 10;
    }

    console.log(x);
}

testVarScope();

// Output:10
//عشان var مش بيهتم بالـblock بتاع الـif هو بيكون متاح في الـfunction كلها

// part C,2

function testBlockScope() {
    if (true) {
        let a = 10;
        const b = 20;

        console.log(a);
        console.log(b);
    }

   
}

testBlockScope();

//output:
//10
//20

// let , const black-scoped موجودين جو ال {}

// part C,3

var name = "Ahmed";
var name = "Ali"; 

console.log(name);

let age = 20;// error
// output : Ali
//var عادي أعمله declaration تاني بنفس الاسم
//let مينفعش أعمله declaration تاني بنفس الاسم

// part C,4

const student = {
    name: "Ahmed",
    age: 21,
    city: "Mansoura"
};

console.log(student);
//{name: 'Ahmed', age: 21, city: 'Mansoura'}

student.age = 22;
console.log(student);
//{name: 'Ahmed', age: 22, city: 'Mansoura'}

student.grade = "A";
console.log(student);
// {name: 'Ahmed', age: 22, city: 'Mansoura', grade: 'A'}

delete student.city;
console.log(student);
//{name: 'Ahmed', age: 22, grade: 'A'}
try {
    student = {
        name: "Ali"
    };
} catch (error) {
    console.log(error.message);
}

// part C,5
const nums = [1, 2, 3];

nums.push(4);

console.log(nums);
// [1, 2, 3, 4]


nums[0] = 10;

console.log(nums);
// [10, 2, 3, 4]


try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);//هنا أنا مش بغير محتويات الـarray، أنا بحاول أدي الـvariable نفسه array جديدة
}

//عادي أغير محتويات الـarray حتى لو هي const


// part C,6

var a; 
let b;
const c; // Error

console.log("var and let are valid.");
console.log("const must have a value when declared.");


// part C,7

var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1);
console.log(window.g2);
console.log(window.g3);


 //Output:
// var global
// undefined
// undefined

//var global يتم إضافته إلى window.
//لكن let و const لا يتم إضافتهم كـ properties مباشرة على window.


// part C,8

const handlers = {};

for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}

console.log(handlers.fn0());
console.log(handlers.fn2());

// Output:
// index: 0
// index: 2
//let له block scope 


// part D,1
const welcome = (name) => `Welcome, ${name}!`;

console.log(welcome("Ahmed"));
// Output: Welcome, Ahmed!



// part D,2
const fullInfo = (first, last, age) =>
    `${first} ${last} is ${age} years old`;

console.log(fullInfo("Ahmed", "Mohamed", 21));

// Output: Ahmed Mohamed is 21 years old




// part D,3


const multiply = (a, b) => a * b;

console.log(multiply(5, 3));


 //Output: 15




 // part D,4


 const addNumbers = (a, b) => {
    console.log("First number:", a);
    console.log("Second number:", b);

    return a + b;
};

console.log(addNumbers(5, 3));

// Output:
// First number: 5
// Second number: 3
// 8



//part E,1
 const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};

const { title, price, inStock } = product;

console.log(title);
console.log(price);
console.log(inStock);

// Output:
// Laptop
// 15000
// true


//part E,2



const skills = ["HTML", "CSS", "JS", "React"];

const [first, second] = skills;

console.log(first);
console.log(second);

// Output:
// HTML
// CSS






//part E,3


function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}

console.log(greet("Ahmed", "Welcome"));
console.log(greet("Ahmed"));
console.log(greet());

// Output:
// Welcome, Ahmed!
// Hello, Ahmed!
// Hello, Guest!


//part E,4


function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// Output:
// 6
// 100


//part E,5


const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const merged = [...arr1, ...arr2];

console.log(merged);

// Output:
// [1, 2, 3, 4, 5]


const originalArray = [10, 20, 30];

const copiedArray = [...originalArray];

copiedArray.push(40);

console.log(originalArray);
console.log(copiedArray);

// Output:
// [10, 20, 30]
// [10, 20, 30, 40]



//part E,6
const user = {
    name: "Sara",
    age: 22
};

const contact = {
    email: "sara@nti.com",
    age: 23
};

const mergedObject = {
    ...user,
    ...contact
};

console.log(mergedObject);

// Output:
// {
//   name: "Sara",
//   age: 23,
//   email: "sara@nti.com"
// }


// Which age wins? 23

// Why?
// لأن contact جاء بعد user.




//part E,7

const values = [2, 4, 6, 8];

function total(a, b, c, d) {
    return a + b + c + d;
}

console.log(total(...values));

// Output: 20



// part f,1
let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};

let person2 = person1;

person2.name = "Omar";

console.log(person1.name);

// Output: Omar


// person1 و person2 بيشيروا لنفس الـobject في memory
// لذلك لما غيرنا person2.name
// اتغير person1.name كمان


// part f,2
const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const copy = {
    ...original
};

copy.name = "Sara";
copy.details.city = "Alex";

console.log(original);
console.log(copy);

// Output:

// original:
// {
//   name: "Mona",
//   details: {
//      city: "Alex"
//   }
// }

// copy:
// {
//   name: "Sara",
//   details: {
//      city: "Alex"
//   }
// }



// part f,3
const original2 = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};

const deepCopy = structuredClone(original2);

deepCopy.details.city = "Alex";

console.log(original2);
console.log(deepCopy);

// Output:

// original2:
// {
//   name: "Mona",
//   details: {
//      city: "Cairo"
//   }
// }

// deepCopy:
// {
//   name: "Mona",
//   details: {
//      city: "Alex"
//   }
// }


// structuredClone عمل Deep Copy ال insted object بقي لوحده


// part f,4
const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};

localStorage.setItem("userdata", JSON.stringify(userData));



const storedData = localStorage.getItem("userdata");



const parsedData = JSON.parse(storedData);

console.log(typeof parsedData);
console.log(parsedData);

// Output:
// object
// { name: "Ahmed", age: 26, city: "Alex" }



localStorage.removeItem("userdata");

console.log(localStorage.getItem("userdata"));

// Output:null



