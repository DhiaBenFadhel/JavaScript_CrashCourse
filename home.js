console.log('hello');
alert('wassup bro');

//taping and showing variables
var b ='shut the fuck up';
console.log(b);

var somenumber =45;
console.log(somenumber);


// manipulating DOM  its changing html with js
var age = prompt('What is your age?');
document.getElementById('sometext').innerHTML = age;
console.log(age);


//NUmbers in JS
var num1 = 50;
  
//increment num1 by 1
num1++;
  
//decrement num1 by 1
num1--;
console.log(num1);
  
//devide, multiply,remainder%
console.log(num1 % 5);
console.log(num1 / 5);

//increment / decrement by any number
num1 += 20;
console.log(num1);

/* functions
1.create a function
2.call it
*/
// creation
function fun() {
    console.log('this is a function');
}
// calling is very important otherwise its not gonna work
fun() ;

// function takes a name and says hello  to that name


function grettin(yourname) {
    var result = 'hello' +' ' + yourname;
    console.log(result);
}
var name = prompt('what is ur name?');
grettin(name);

// Arguments in functions
// adding 2 nubers in a function
function sumnumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumnumbers(22, 55);

 //while loops
var num = 0;
while (num < 10){
    num += 1
    console.log(num);
}


// for loop
for (let num = 90; num < 100; num++) {
    console.log(num);
}


/* data types
let age = 14; //number
let urname ='dhia'; //string
let name = {first: 'jane', last: 'doe'}; //object
let truth = false; //boolean
let things = ['PC','RAM']; //array
let random; //undefined 
let nothing = null; //value null*/

//strings in JS
let fruit ='orange,wattermelon,blackberry,banana';
let morefruits ='orange\banana'; //new line 

console.log(fruit.length);
console.log(fruit.indexOf('ran'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ora', 'fuc'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));//split by a comma
console.log(fruit.split('')); // split by characters

//Arrays i JS
let fruits = ['apple','banan','pinaapple'];
fruits = new Array('apple','banan','pinaapple');

console.log(fruits[2]); //acces to index 2nd

fruits[0] = 'wattermelon';
console.log(fruits);

for (let i = 0; i < fruits.length; i++  ){
    console.log(fruits[i]);
}


// Array common methods
console.log('to string',fruits.toString());
console.log(fruits.join(' __ '));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'),fruits);
console.log(fruits[3]);
fruits[fruits.length]= 'new fruit'; //same as push
console.log(fruits); 
fruits.shift();  // remove first element from an array
console.log(fruits);
fruits.unshift('kiwi');  // add first ellemn to an array
console.log(fruits);

let meat =['bacon ', 'ba9ri', '3alouch',' chicken'];
let dinner = fruits.concat(meat);
console.log(dinner);
console.log(dinner.slice(1, 4));
console.log(dinner.reverse());
console.log(dinner.sort());

let someNumbers = [ 5, 10, 20, 25, 30, 35, 40, 45, 50];
console.log(someNumbers.sort(function(a, b){return a-b})); // sorted i n ascending order
console.log(someNumbers.sort(function(a, b){return a-b})); // sorted i n descending orde
let emptyArray = new Array();
for ( let num = 0 ; num <=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray); 

// objects in JS
// dictionaries in Python

 let student ={
    first: 'Dhia',
    last:'Ben Fadhel',
    age:16,
    heigth:189,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
 console.log(student.first);
 console.log(student.last);
 student.first = 'notDhia'; // chang value
 console.log(student.first);
 student.age++;
 console.log(student.age);

 console.log(student.studentInfo());

 // Conditionales, Control flows (if-else)
 // && =AND
 // || OR
age = 20;

if ( (age >=18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
}else {
    status = 'not my attention';
    console.log(status);

}

// switch statments
// weekday vs.weekend
// day 0--> sunday-->weekend
//day 6--> saturday-->
//day 4-->thursday-->weekday
switch (6){
    case 0:
        text ='weekend';
        break;
    case 5:
        text ='weekend';
        break;
    case 6:
        text ='weekend';
        break;
    default:
        text='weekday'
} 
console.log(text);
