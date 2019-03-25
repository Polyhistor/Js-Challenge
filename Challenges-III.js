 // Practicing time and some other challenges! 

// First date() object

// getTime returns the number of miliseconds since January 1, 1970
const  d = new Date()
const ans1 = d.getTime()
console.log(ans1)

const e = new Date()

// get year as a four digit number 
const ans2 = e.getFullYear()
console.log(ans2)

// get month as a number 
const ans3 = e.getMonth()
console.log(ans3)

// -> a cooler version of returning months 
const monthArray =['January','February','March','April','May','June','July','August','September','October','November','December']
const ans3_1 = monthArray[e.getMonth()]
console.log(ans3_1)

// get day as a number 
const ans4 = e.getDate()
console.log(ans4)

// get the hours as a number 
const ans5 = e.getHours()
console.log(ans5)

//get seconds as a number
const ans6 = e.getSeconds()
console.log(ans6)

// get miliseconds as a number 
const ans7 = e.getMilliseconds()
console.log(ans7)

// get weekdays as a number 
const ans8 = e.getDay()
console.log(ans8)

// a cool version 
const WeekArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const ans8_1 = WeekArray[e.getDay()]
console.log(ans8_1)

// get the current time 
// const ans9 = e.Date.now()
// console.log(ans9)


function formatDate(userDate) {
    userDate = new Date(userDate)
    console.log(userDate)
    let y = userDate.getFullYear().toString()
    console.log(y)
    let m = (userDate.getMonth()+1).toString()
    console.log(m)
    let d = userDate.getDate().toString()
    console.log(d)
    if (m.length == 1) m = '0' + m;
    if (d.length == 1) d = '0' + d;
    const ans = y + m + d
    return ans
  }
  
  ans9 = formatDate("11/9/2014")
  console.log(ans9)


  // Reduce 

  let arro = [1,2,3,4,5]

  addSomeNum = (num,total) => {
      return num + total
  }

  const ans10 = arro.reduce(addSomeNum)
  console.log('ans10 is'+ ans10)


  // a very intesting challenge

  createCheckDigit = (value) => {

    let asStr = value.toString()
    let sum = asStr.split("").reduce((a,c) => {
        a+=parseInt(c)
        return a
    }, 0)
    return sum >= 10 ? createCheckDigit(sum) : sum

  }


  let ans11 =  createCheckDigit(23)
  console.log(ans11)

  
// Weird cases of javascript :)

function aaa() {
    return
    {
        test: 1
    };
}
console.log(typeof aaa());


console.log(3 + true);
console.log(3 + false);

console.log('String + Number:', "4" + 8);

console.log(1 + 1 + "1");


console.log('String + Number:', "50" + 50);
console.log('Negative + String + Number:', -"50" + 50);


x = 4      // x=4
y = x++    // y = 4 and  x = 5
console.log(x)
// y is set to the value before incrementing and it adds 1 to x

// Be careful about resetting values when using postfix
var a = 5     // a = 5
a = a++       // a = 5
// a is set to the value before incrementing


function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = '11';
}
console.log(typeof bar());

console.log(1 - - "1")


var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;
console.log(go)

console.log(go());
let ans12 = console.log(foo.baz.bar());
console.log(ans12)

Function.prototype.curry = function (){
  var f = this
  var curryAargs = Array.prototype.slice.call(arguments)
  
  // return a function that returns the result of invoking the original function
  return function() {
    return f.apply(this, curryAargs.concat(
        Array.prototype.slice.call(arguments)
    ))
  }
}

function show(message){
  console.log(message)
}

var joke = show.curry('two friends walk into a bar...')
var someOtherJoke = show.curry('another joke perhaps?!')
joke()
someOtherJoke()

// the craziness behind __proto__ and prototype 

Object.O1='';
Object.prototype.Op1='';

Function.F1 = '';
Function.prototype.Fp1 = '';

Cat = function(){};
Cat.C1 = '';
Cat.prototype.Cp1 = '';

mycat = new Cat();
o = {};

// EDITED: using console.dir now instead of console.log
console.dir(mycat);
console.dir(o);



// Some more currying 

Function.prototype.curry = function() {

  var f = this 
  var curryArgs = Array.prototype.slice.call(arguments)

  // return a function that retuns the result of invoking the original function 
  return function() {
    return f.apply(this,curryArgs.concat(Array.prototype.slice.call(arguments)))
  }

}

function show(message){
  console.log(message)
}

var joke = show.curry('we are asda')
joke()


// another partial functioning 

finalizer = (adj1, ajd2, adj3) => {
  return adj1 + ajd2 + adj3
}


partially = (adj1) => {
  return finalizerI = (adj2,adj3) => {
    return finalizer(adj1,adj2,adj3) 
  }
}

const partiallyObj = partially('smart')
const fullyObj = partiallyObj('amazing','cool')

console.log(fullyObj)


// Curry Curry 

Function.prototype.curry = function () {

  let f = this 
  let curryArgs = Array.prototype.slice.call(arguments)

  return function() {
    return f.apply(this, curryArgs.concat(Array.prototype.slice.call(arguments)))
  }

}


function show (message) {
    return message
}


let myMessage = show.curry('my joke')
console.log(myMessage())


// Apply is amazing! 
// if you want to add an element of an array to another array you would go with a few methods: 

// you may be tempted to use Push. let's do it ;) 

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const final = arr1.push(arr2)
console.log(final) // returns the new length 

console.log(arr1) // the result is [1,2,3,[4,5,6]]

// but what if we don't want an array into an array, hmm, let's do concat this time 

const finalConcat = arr1.concat(arr2)
console.log(finalConcat)

// well this will do the job, but it will always create a new variable (new array) as a result, what if we don't want that? what if we need 
// the very same array to be updated? praise the lord, Apply()!

const array = ['a', 'b']
const elements = [0,1,2]

array.push.apply(array,elements)
console.info(array) // Done :) 

// Using an object in an array-like fashion
var obj = {
  length: 0, 
  addElemn: function addelem(element) {
    [].push.call(this,element)
  }
}

obj.addElemn({})
obj.addElemn({})
console.log(obj.length)


// bind 

function justSomeFunc (height) {
  return this.width * height
}


obj = {
  width: 5
} 


var bound = justSomeFunc.bind(obj)
console.log(bound(4))

//Fibonnaci - 

// #1 - the good way

FibonacciI = (n) => {

  let arr = [0,1]

  for (var i=2; i<n+1; i++){
      arr.push(arr[i-1]+arr[i-2])    
  }

  return arr

}

console.log(FibonacciI(10))

// #2 - again the bad way 

FibonacciII = (num) =>{

  if (num < 2) {
    return num
  }
  return FibonacciII(num-1) + FibonacciII(num-2)

}

console.log(FibonacciII(10)) // => 55 (with 177 iterations)

// # the optimal way!

getFibonacci = (num) => {

  let cache = []

  let fib = function(value) {

    if (value <2) return value
    if(cache[value]) return cache[value]

    cache[value] = (fib(value-1) + fib(value-2))
    return cache[value]

  }

  return fib(num)

}

console.log(getFibonacci(10)) // executed 20 times only
