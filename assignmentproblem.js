/*problem 1
if the number is even and less than 15, print a
if the number is even and more than 15, print b
if the number is odd and less than 10, print c
if the number is odd and more than 10, print d*/
{
    var num=prompt(" ");
    if (((num % 2) == 0) && (num < 15)) {
        console.log('a')
    } else if (((num % 2) == 0) && (num > 15)) {
        console.log('b')
    } else if (num < 10) {
        console.log('c')
    } else if (num > 10) {
        console.log('d')
    }
}

/*problem 2
Result
answer should be: "Hi, my name is Farheena"*/
let name = prompt("Whats your name?")
console.log(" \"Hi, my name is " + name + "\"")

/*problem 3
global scope and local scope*/

Ans. Global Scope - In a programming environment the global scope is the scope that contains and is visible in all other scopes.
in client side JavaScript the global scope is generally the web page inside which all the code is being executed.
Local Scope - Local scope is a characteristic of variables that makes them local

/*problem 4
create a variable called myName and store your name inside it.
then, add Mr./Miss. before it and store the result in
a new variable with the same name i.e. myName.*/

{
    let myName = "Divya"
    myName = "Mr. " + myName
    console.log(myName)
}
    
/*problem 5
Find sum and multiplication of all natural numbers from 10 to 20*/

function sum(a,b) {
    if (a > b) {
        let insum = 0
        for (i = b; i <= a; i++) {
            insum = insum + i
        }
        console.log(insum)
    }
    else {
        let insum = 0
        for (i = a; i <= b; i++) {
            insum = insum + i
        }
        console.log(insum)
    }
}
function mull(a,b) {
    if (a < b) {
        let inmull = 1
        for (i = a; i <= b; i++) {
            inmull = inmull * i
        }
        console.log(inmull)
    } else {
        let inmull = 1
        for (i = b; i <= a; i++) {
            inmull = inmull * i
        }
        console.log(inmull)
    }
}

sum(20,10)
mull(10,20)

/*problem 6
Check whether a given year is a leap year
create a variable and store a random year in it
now write code, which should return true or false, depending whether the value in the above
variable is leap year or not*/
let year=prompt("Enter any year in number format only")
function leap(year){
    if((year%4)==0){
        console.log("true")
    }else{
        console.log("false")
    }
}
leap(year)

/*problem 7 - find the area of a triangle. Lengths of its sides are 5, 6, 7*/
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

/*problem 8
create two variables and store numbers in them.
Now, write code, which return true if one of the variable is 50 or if their sum is 50.
Otherwise, you need to return false.
Also handle edge cases
(in real world, these two numbers will be supplied by the users.
Now think what if they supply something which is not a number ?)*/

function new1(a,b)
    {
    if(a==50||b==50||(a+b)==50){
        console.log("true")
    }else{
        console.log("false")
    }
}
new1(50,60)
new1(25,25)
new1(25,50)
new1(3,25)
new1(3,"hi")
new1(true,false)

  {

  }
  /* Problem 9 - create a variable and store a number inside it
write program to check whether a given variable is between 100 and 200
write program to check whether a given variable is between 100 and 200 or 400 and 500
handle edge cases*/
{
}
let a=prompt("write a number of your desire")
let n=Number(a)
console.log
function number23(n){

if (isNaN(n)){
    console.log("write a number")
}else if((n>100)&&(n<200)){
    console.log("yes its between 100 and 200")
}else{
    console.log("its not")
}
}
function number24 (n){
    if (isNaN(n)){
        console.log("write a number")
    }else if((100<n<200)||(400<n<500)){
        console.log("yes its between 100 and 200 or between 400 and 500")
    }else{
        console.log("its not")
    }
    }


return number23

return number24
{
}

/* Problem-10 - you have 3 numbers.
write a program which can find the largest number*/
const a = 150
const b = 80
const c = 233

if(a>b){
    if(a>c){
        console.log(a , "is the largest number")
    }else{
        console.log(c, "is the largest number")
    }
}else{
    if(b>c){
        console.log(b, "is the largest number")
    }else{
        console.log(c, "is the largest number")
    }
}
/*problem 11
create two variables and assign numbers to them
now write a code which returns true if one of them is 8 or their sum or difference is 8. Otherwise
it should return false*/

function xcc(a,b){
    if((a==8)||(b==8)||((a+b)==8)||((a-b)==8)||((b-a)==8)){
        console.log("true")
    }else{
        console.log("false")
    }
}
xcc(10,2)
xcc(2,10)
xcc(8,78)
xcc(6,2)
