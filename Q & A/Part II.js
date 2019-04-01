// #16 take a look at the code shown and guess the outcome 

console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof {}) // object
console.log(typeof []) // object

// in javascript almost everything is an object, that inlcudes arrays!

// #17 bind() function method: 
// describe how it works 
// explain the parameters that it takes 
// code out an example of how bind() is used

this.distance = 10000

const roadTrip1 = {
    distance: 3000,
    getDistance: function() {
        return this.distance
    }
}


const roadTrip2 = {
    distance: 5000
}

const myRoadTrip = roadTrip1.getDistance.bind(roadTrip1)
console.log(myRoadTrip())


const myRoadTrip2 = roadTrip1.getDistance.bind(roadTrip2)
console.log(myRoadTrip2())


// so what bind() does is actually bind the scope of the function given to the target, so we can actually call the same function from within and then have it set to another scope. 
// let's do another example 

const nameGenerator = {
    name : '', 
    fname : '',
    age : 0,
    printName : function() {
        return 'i am ' + this.name + this.fname + 'and i am ' + this.age +' years old'
    }
}

const anotherName = {
    name : 'pouya'
}

const anotherfname = {
    fname: 'ataei'
}


console.log(nameGenerator.printName())
console.log(nameGenerator.printName.bind(anotherName)())
console.log(nameGenerator.printName.bind(anotherfname)())

// #18 take a look at the code shown, what is logged out for each of the expression down there

const user1 = {
    name: 'John',
    age: 28
}

const user2 = {
    name: 'John',
    age: 28
}

console.log(user1 == user2)
console.log(user1 === user2)

// in both cases, you'll get false, because no two objects are the same. well, they may have the same properties, but what javascript engine knows is that, they are 
// some spaces in the memory and it doesn't bother to gather all the things inside and compare them. So, everything is different from the other, because it is stored in different memory part
// bear that in mind yo! 
// however, you can check the properties of an object and then compare, checkout below; 

console.log(JSON.stringify(user1) ==  JSON.stringify(user2))

// well, Json,stringift turns a javascript object into a JSON string. so now that we've got two JSON string, we can compare the strings yo :) that cool, ain't it? 

// #19 take a look at the code, determine the logged out value 

console.log( [10,20,30,40,50].indexOf(30) ) // 2
// easy peasy
console.log( [{name: 'pam'}, {name: 'kent'}].indexOf({name: 'kent'})) // -1
// Don't forget two objects are never the same! objects are passed by reference not by value, although the value of those two objects looks identical, but they take different spaces in the memory
// {name: 'kent'} is not {name: 'kent}!! bear that in mind 

console.log( 'hello world'.indexOf('o')) // 4
//easy peasy
console.log([[1], [2], [3], [4]].indexOf([2])) // -1
// again arrays are objects too! so two different arrays are never identical. the value inside maybe, but they are just references to parts in a memory and in that way they are not identical.

//however if we create a new array from another array, they are equal, check this out 

myArray = [4]
console.log([[1], [2], [3], [4], myArray].indexOf(myArray))

// soo now that both of those are referencing to the same part in the memory oyu can get the index 4 as a result 
// another interesting thhing, by looking at the code you'll know :) 

newArray = myArray

console.log([[1], [2], [3], [4], myArray].indexOf(newArray))

// index 4 is the logged out result

// #19 are the values equal ? what's the outcome 

console.log(900.9 === 3 * 300.3)
 
// Javascript  has only one type for digits, and that's number. number is using IEEE 754 double-digit binary encoding, and that's where it's lacing the precision 
// so if you'd like to get exact comparison, use some APIS or libraries 
// there are ways to handle the issue anyways, check out below; 

console.log((300.3 * 3).toFixed(2))

// but toFixed method represents the number as a string. Conver it using Number!

console.log(Number((300.3 * 3).toFixed(2)))

// another way, you can use toPrecision()

console.log(Number((300.3 *3).toPrecision(4)))

//#20 what's the logout result 

var string1 = 'Tampa'
var string2 = string1 

string1 = 'Venice'

console.log(string2)

// Tampa

var person1 = {
    name : 'Alex',
    age: 30
}

var person2 = person1 
person2.name = 'kyle'

console.log(person1)

// Kyle 


// #21 figure out what is happneing and then determine what will be logged out 

const data1 = 'Jordan Smith'

const data2 = [].filter.call(data1, function(elem,index) { return index > 6} )

console.log(data2)


// so what we are doing here, is first we call Array.prototype with the notion of [] and then from there on we are applying filter array method and with the help of call we change the object
// from string to an array, from there on it's pretty straight forward. 
// so the lesson here is that, we can use array methods on strings, but there are a few things to consider; 

// you can only use 'read-only' methods: filter, forEach, map, some, every, etc.
// but not write methods such as : push, pop, splice, shift, reverse



// Some reminder practice for array.filter

let arrTest = [1,2,3,4]
let output = arrTest.filter((elem,index)=> { if (elem > 2 && index >2) return elem})
console.log(output) 


// some more refresher 

let arch = 'Fishy Pishy'

let archArr = arch.split('')

console.log(archArr.reverse())


// #22 determine what will be logged out 

const a = {}
const b = { name : 'b'}
const c = { name : 'c'}

a[b] = 200 
// a = { '[object Object]' : 200}
console.log(a[b])

a[c] = 400
// a = { '[object Object]' : 400}
console.log(a[c])

console.log(a)

// so the thing is, in javascript objects are always strings, so when you set an object as a key, the javascript engine will convert it to an string, and guess what happens when you turn 
// an object to string ? it will show up like [object Object], so we basically can do that without an error, but it's absurd and useless. 
// moreover, in the first phase, we've had '[object Object]' : 200 and we pretty much updated the key '[object Object]' to 400. Interesting!


// #23 what's the value logged out ? 

var x = 10 

function y() {
    x = 100
    return 
    function x() {}
}

y()
console.log(x)


// #24 what's the output ?

const account1 = {
    name: 'Jen',
    totalAmount: 5000,
    deductAmount: function(amount) {
      this.totalAmount -= amount;
      return 'Amount in account: ' + this.totalAmount;
    },
  };
  
  const account2 = {
    name: 'James',
    totalAmount: 8000,
  };
  
  const withdrawFromAccount = function(amount) {
    return account1.deductAmount.bind(account2, amount);
  };
  
  console.log(withdrawFromAccount(500)());
  console.log(withdrawFromAccount(200)());



  class polygon {
    constructor (width, height) {
        var width = width
        var height = height
    }
  }

  class rectangel extends polygon {
      constructor(width,height) {
          super (width, height)
          this._color = ''
      }

      get area() {
          return this.width * this.height
      }

      get color() {
          return this._color 
      }

      set color() {
          this._color = value
      }
      
  }