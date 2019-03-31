// #1 Write a function called TripleAd with triple invocation and return the total of all 3 numbers added together.
// Ex : tripleAdd(10)(20)(30)

tripledadd = num =>  {
    return num2 => {
        return num3 => {
            return num+num2+num3
        }
    }
}

let ans1 = tripledadd(10)(20)(30)
console.log(ans1)


// #2 IIFE, what is IIFE and provide an example of it 
// IIFE stands for immediately invoked function expression, it is when you define a function and you call it right away, like the example below 

// (function sumNumber(nums1, nums2){
//     return ( nums1 + nums2 )
// })(2,3)


// #3 What happens when you click button number 5

function buttonAdd() {
    for (let i=0; i<5; i++) {
        var body = document.getElementsByTagName('body')[0]
        var but = document.createElement('BUTTON')
        but.innerHTML = "button" + i
        but.onclick = function(){
            alert('this is the button' + i)
        }
        body.appendChild(but)
    }
}
buttonAdd()


// #4 Hoisting 

// someRandomFunc = () => {
//     var total 

//     for (i=0 ; i<10 ; i++) {
//         var --> this is function block hoisted 
//         let --> this is block scope hoisted
//     }

// }

// Together variables and functions are hoisted to the top of scope that they are declared in


// #5 some really good tricks 

var num = 50 

logname = () => {
    console.log(num)
    var num = 100
}

logname()


// in this case you will get undefined, becasue inside the scope of the function the variable is hoisted at top, and because it's a var, it will be undefined. and No, it doesn't have
// access to the overall scope, and it won't be 50! jesus, right?! 

// Another fact to bear in mind, checkout the code below; 

logname = () => {
    console.log(num)
}

logname()

// in this case, we will output 50, and that's because there is no more variable declaration of 50 inside the scope. That's interesting and from that we can learn that if there's a variable 
// inside the function with the given name, it has precedence, and the javascript will look for the value of that, but however if we do not have that declaration, and there is a global 
// variable available, then javacript will use it! so to cut the long story short, inner variable declaration has preceence over the outer variable declaration


// #6 what is strict mode? 
// well strict moder is much stricter parsing and error handling in javascript
// it comes with a lot of advantages, it points out errors and bugs that javascript engine normally doesn't. Thus, using 'strict mode' we will get better results and error handling. 
// there are a few things that we can mention; 
// 1. You can't define a global variable in strict mode, and that's something great, because you'll avoid name collisions and bugs that may emerge later on
// 2. You can't have the same name for two arguments or parameters. This is great too, this will helps is avoid overriding the same variable and obscure bugs findings 
// 3. It will generally give you more errors. for example, if you try to do a delete on Object.prototype, it's an error in javascript, becuase, wtf, you're breaking the whole chain. In strict mode, there will be
// an error, but in normal mode, No error will be shown. I don't know why javascript is not in 'strict mode' all the time.


// #7 curry the function given 

function getProduct (num1, num2) {
    return num1 * num2
}

console.log(getProduct(10, 20))

// Curried version. Currying is the process of turning a function with multiple parameters into functions that each take one parameter, this way we increase performance, and we use memorizatoin, 
// currying is a perfect tool! 

function getProductCurry (num1) {
    return function(num2) {
        return num1 * num2
    }
}

console.log(getProductCurry(10)(20)) 


// Now let's talk about one practical implementation of this currying 
// for example we've got a function that calculates distance and speed; 

arrivalCalculate =  (distance, speed) => {
    return distance / speed   
}

console.log(arrivalCalculate(400,100))

// well, this is cool, but imagine that we'd like to run the function for 3 cases, where we pretty much have the same distance but at different speeds.

console.log(arrivalCalculate(2000,1000))
console.log(arrivalCalculate(2000,25))
console.log(Math.floor(arrivalCalculate(400,30)))

// This will certainly get the job done, but hey, we are engineers, we'd like to do the best things in best possible ways! 

arrivalCurried = (distance) => {
    return innerArrival = (speed) =>{
        return distance / speed
    }
}

// so now we it's better, check out the implementation 

const myFixedTime = arrivalCurried(1000)

// this will print the function object, which is a string of codes to be executed, nothing more! 

console.log(myFixedTime)

// and now we can use that variable to run our function so smartly, just invoke it again with any number which will be set as the argument of the inner function 

console.log(myFixedTime(200))

// This is so cool, and nice! always do currying.


// #8 write a function that show how many times each function is called 

counter = () => {
    let counter = 0
    return counterInner = () => {
        return counter += 1
    }
}

let objectOne = counter()
let objectTwo = counter()

console.log('objectOne called: ' + objectOne())
console.log('objectTwo called: ' + objectTwo())
console.log('objectOne called: ' + objectOne())
console.log('objectOne called: ' + objectOne())
console.log('objectTwo called: ' + objectTwo())
console.log('objectTwo called: ' + objectTwo())
console.log('objectTwo called: ' + objectTwo())
console.log('objectTwo called: ' + objectTwo())


// Cool, right ?

// #9 guess the outcome

//  (function() {
//      var x= y = 200
//  })

//  console.log(x) // undefined
//  console.log(y) // 200

 //let's see, you might expect it to be like this 

//  (function(){
//      var y = 200; 
//      var x = y
//  })()

 // but that's not the case, what is happening under the hood is this 

//  (function() {
//      y = 200 
//      var x = y
//  })()

 // so now whne you see, you can access Y out of the scope of the function, and that's why you can log the value of Y and not X
 // X is actually within the scope and you can't access it, since it's IIFE, however you can do 'use strict' and this will go away


// #10 Describe call() and apply() methods 
// Address the following: 
// 1. How do they function ?
// 2. What argument do they take ? 
// 3. How they are different ?


function product (name, price) {
    this.name = name 
    this.price = price
}

function food  (name, price)  {
    product.call (this, name, price)
    this.category = 'food'
}

function toy (name, price) {
    product.call (this, name, price)
    this.category = 'toy'
}

let Chicky = new food('Chicken',10)
let toyo = new toy('shark',20)
console.log(Chicky.name)
console.log(Chicky.category)

console.log(toyo.name)
console.log(toyo.category)

// well, we this apply() and call() to allow a method of one object to be used for another object, as seen in the example above


function firstName(fname) {
    this.fname = fname 
}

function lastName(fname, lname) {
    firstName.call(this, fname)
    this.lname = lname
}

myName = new lastName('pouya', 'ataei')
console.log(myName)

// another example 

const car1 = {
    brand: 'porsche',
    getCarDescription : function(cost, year, color){
        console.log('this car is a ' + this.brand + 'the price is ' + cost + 'the year is ' + year + 'the color is' + color)
    }
}


console.log(car1.getCarDescription(10,2011,'red'))

const car2 = {
    brand: 'maseratti'
} 


car1.getCarDescription.call(car2, 100, 2010 , 'blue')

 // whereas call takes list of arguments, apply takes an array of arguments
car1.getCarDescription.apply(car2,[ 10,200,'red'])


// #11 what will the code below output?  

const list1 = [1,2,3,4,5]
const list2 = list1
list1.push(6,7,8)

console.log(list2)

// watch out for pass by value and pass by references, primitive types (boolean, int, string, null, undefined) are always passed by value 
// whereas functions, objects, and arrays are passed by references, which means in the case above, list2 only holds the reference to the very same array 
// so if we had pass by value, we would get different result, checkout below 

let myString = 'peter'
let yourString = myString
console.log(yourString)

// now you see the value of the myString is passed to the value of yourString, this is what we call pass by value.
// whereas if we had other data types like Objects, the value would not be passed, but only the reference, checkout below; 

// const list1 = [1,2,3,4,5]
// const list2 = list1 // passed by reference 


// let's dive deeper 

let mylist = [10,20,30]
const mySecondList = mylist
mylist.push(10,20)

console.log(mySecondList)
console.log(mylist)

mylist = [7,7,7]
console.log(mylist)
console.log(mySecondList)

// when you do redeclare a pass by reference variable, bear in mind that , you assign new value to the variable, but the underlying or previous value that it was referring to before hand, will remain there
// so if we have another variable that used to refer to the older verison of the mylist, before it was redeclared, it will still point to the old value, because it exists! 
// we have now just changed it to point to a new value, that doesn't mean the engine will remove the old value! it is there! becareful ! 


// Follow-up question, now we'd like to create the second array to hold the value of the same array, without being pointed to the first one! so once we update the first one, the second is left untouched. 

// first approach

let original = [1,3,3]
let molombo = []
Object.assign(molombo, original)

// second approach 
let solombo = original.slice()

// third approach 
let nolombo = original.concat()

original.push(4,4)

console.log('original object: '+original)
console.log('object.assign method: ' +molombo)
console.log('slice() method: '+solombo)
console.log('concat() method: '+nolombo)



// #12 you task is to write a function called getTotal() that can be invoked in two different ways, it can be singly invoked ( getTotal(10,20) ) or it can be doubly invoked ( getTotal(10)(20)), 
// either way you should get the total of the numbers fed 

function getTotal  ()  {

    var args = Array.prototype.slice.call(arguments)
    
    if (args.length === 2) {
        return args[0] + args[1]
    }
    
    else if (args.length === 1) {
        return function (num2) {
            return args[0] + num2
        }
    }

}

console.log(getTotal(10,20))
console.log(getTotal(10)(20))


// it is essential to consider that 'arguments' keyword is an array-like object
// now we'd like to convert it to ann array, so what we do is that at first we define an array from the Array mother object it self like this -> 
// Array.prototype 
// and because when you used slice() it will copy everything from an array, we copy all the array properties -> 
// Array.prototype.slice
// and lastly with the help of call, we are using a method of one object to be used in another object
// Array.prototype.slice.call 
// now we have converted arguments array-like object to an array

// #13 what is JSOn ?
// what datatypes are allowed in a JSON code? 
// how should it be transfered? in what format? 

const myJsonObj = {
    myString: "allowed", 
    myNumber: 12344,
    myBoolean: true,
    myArray: [1,2,3],
    myNull: null,
    myObj : {name: 'yo', last:'to'}
}

// Json stands for javascript object notation, it's a lightweight format for transferring data. both inside system and outside. 
// Json is used because it's human-readable and it's easy to parse. it's the most common form to receive data from API 

// undefined and functions are not allowed in JSON

// Strings must be always sorrounded with double quotes. single quotes are not allowed in JSON


// #14 in what order we will see the log ? 

function LogNumbers() {
    console.log(1)
    setTimeout(function(){console.log(2)}, 1000)
    setTimeout(function(){console.log(3)}, 0)
    console.log(4)
} 


LogNumbers()

// the output will be 1,4,3,2 and that's because we've got event loop, and every callback function, event handling, etc is added to that, so console.log comes before the event loop

// #15 list and describe three ways to create an object in javascript


// #1 first way is to create object lietral syntax

const myBoat = {
    length : 24, 
    name: 'ferro', 
    passengers: 20,
    maxSpeed: 10,
    getLength : function() {
        return this.length
    }
}

// #2 using the new keyword and object constructor 

const student = new Object()

student.name = "poya"
student.age = 12 
student.parents = null
student.getParents = function () {
    return this.parents
}

console.log(student)


// #3 using a constructor function 

function carBuilder(color, brand, year) {
    this.color = color 
    this.brand = brand 
    this.year = year
}

carBuilder.prototype.getColor = function() {
    return this.color
}

const myCar = new carBuilder('blue', 'maseratti' , 2015)

console.log(myCar)
console.log(myCar.getColor())

