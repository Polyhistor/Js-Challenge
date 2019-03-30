// Pur function! Pure function is a deterministic function that takes in a set of values and returns a value based on computed arguments
// a Pure function never changes the global argument, never changes any state variables, and has no side effects :), cool right? cool my man? 

let fredrick = {
  name: 'Fredick Douglas theFuckhead',
  canwrite: 'no',
  canread: 'fuck no'
}
console.log(fredrick)


selfeducate= () => {
  fredrick.canwrite =  'yeap'
  fredrick.canread = 'yeappie'
}

selfeducate()
console.log(fredrick)

// self educate is not a pure function because it doesn't get any arguments, and it doesn't return any and it also changes variables that are out of the scope

pureFredrick = (person) => {
    person.canread = 'yeap'
    person.canwrite = 'yeapie'
    return person
}

console.log(pureFredrick(fredrick))

// you thought it's pure huh? you idiot, it's still not pure ;) 

// this is a pure one 

const pureFredrickII = person => ({
  ...person,
  canread : 'yo yepa',
  canwrite : 'yay'
})


console.log(pureFredrickII(fredrick))

// watch out for : and =, when you assign a value to an already created object you can do =, but now it's a new one! 


// an impure function on the dome 

impureDom = (txt) => {
    // create a header
    let h1 = document.createElement('h1')
    // set the inner element
    h1.innerText(txt)
    // add it to the dome
    document.body.appendChild(h1)
}

// React use pure functions like the one below 

// pureDom = (props) => {<h1>{props.title}</h1>}

// so we've got 3 rules for pure functions
// always take in an argument
// return an argument or a function
// never change the state of other variables outside the scope , to cut the long story short, just keep inside mate .) keep it inside 


// Join

const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield'
] 

console.log(schools.join(","))

function f(a,b,c) {

  var s = Array.prototype.join.call(arguments)
  console.log(s)

  return s

}

console.log(f(1,2,3))

// Spread operator again

let ans = [...'0123']
console.log(ans)

// Filter

let Arr1 = [1,2,3,4,5]
let filteredArr = Arr1.filter((Arr1)=>{
  return Arr1 > 2
})

console.log(filteredArr)

let filtSchool = schools.filter(predicate => predicate[0] == 'W')

console.log(filtSchool)

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0},
  { id: 3 },
  { id: 12.2},
  { id: NaN},
  { id: null},
  { id: 'undefined' }
]

var invalidEntries = 0

isNumber = (obj) => {
  return obj !== undefined && typeof(obj) === 'number' && isNaN(obj)
}

console.log(isNumber([5]))


const ararrosr = ['apple', 'banana', 'pineapple' , 'dashakh']

filterItems =  (arros,query) => {

    return arros.filter((el)=> el.toLowerCase().indexOf(query.toLowerCase() > -1) )

}



console.log(filterItems(ararrosr, 'ap')); // ['apple', 'grapes']
console.log(filterItems(ararrosr, 'an')); // ['banana', 'mango', 'orange']


const game = ['warcraft', 'starcraft' , 'wow', 'PubG']

const cutGame = (arr,cut) =>  arr.filter((el)=> el !== cut )


console.log(cutGame(game,'wow'))


// to sum up, array.splice and array.pop are not suitable for functional programming because they alter the object, and once the object is altered, 
// your function is not pure, you're sinner now! 

// now let's do some map()


const tobeMapped = [
  {name :'Tehran'}, 
  {name :'Istanbul'},
  {name: 'Dublin'}
]


let ans2 = tobeMapped.map((element)=> element + ' milookhim' )
console.log(ans2)

let ans3 = tobeMapped.map(element=> ({Capital: element}))
console.log(ans3)

const pureEditName = (oldName, name, arr ) => 
    arr.map(el => { 
        if (el.name === oldName) {
          return {
            ...el, 
            name
          }
        }
        else {
          return el
        }
     })

let ans4 = pureEditName('Tehran', 'DubaTehi',  tobeMapped)
console.log(ans4)



// One line solution 

const purEditOneline = (arr,oldName,newname) => 
      arr.map((elem) =>  elem.name=oldName ? ({...elem,newname}) : elem)

// wow I love ternary operation

// Object keys

let object1 = {
  a: 'something',
  b: 'another thing',
  c: 'and perhaps another'
}

console.log(object1['a'])
console.log(Object.keys(object1))
 

// now let's transform an object into an array 

const Schoolarray = Object.keys(object1).map( k => ({ 

    name : k, 
    descriptions : object1[k]

 }) )


console.log(Schoolarray)

// Some reduce function

let ages = [23,43,54,11]

let maxFinder = ages.reduce((max,age)=>{
  if (age>max) {
    return age
  }
  else {
    return max
  }
},0)

console.log(maxFinder)

// I love ternary operators

let maxFinderShort = ages.reduce( (max,age) => age > max ? age : max ,0)
console.log(maxFinderShort)


const color = [
  {
    id: '-xekare',
    title: "rad red",
    rating: 3
  },
  {
    id: '-asdas',
    title: "big blue",
    rating: 3
  },
  {
    id: '-fjfgg',
    title: "grizzly gray",
    rating: 2
  },
  {
    id: '-wexz2',
    title: "banana",
    rating: 1
  },
]

// const hashColors = color.reduce( (hash, {id, title, rating} ) => {
//   hash[id] = {title, rating}
//   return hash
// },{})

// console.log(hashColors)


const hashColors = color.reduce((hash, {id, title, rating})=>{
  hash[id] = {title, rating}
  return hash
} ,{})

console.log(hashColors)


// You can even use reduce to create a thoroughly different array

const colorios = ['red', 'red', 'blue', 'green', 'purple', 'green', 'green']

const distinctColors = colorios.reduce((distinct, color) => (distinct.indexOf(color) !== -1) ? distinct : [...distinct, color], [])

console.log(distinctColors)


// Higher order functions 

const invokefunc = (condition, success, error ) => (condition) ? success() : error()



success = () => {
  console.log('yo succss')
}

error = () => {
  console.log('yo, error ')
}


invokefunc(true, success,error)


// Some Recursion 

recurseCount = (value,func) => {
  func(value)
  return (value > 0 ? recurseCount(value-1, func) : value)
}

recurseCount(10,(n)=>{console.log(n)})


// Recursion and timeOut

recurseCountTime = (value, func, delay=1000) => {
  func(value)
  return (value > 0) ? setTimeout(() => recurseCountTime(value-1, func), delay) : value
}


recurseCountTime( 10, (n) => console.log(n) )

// Composition
// In functional progrmaming we usually try to achieve an application by combining different pure functions 
// well, a basic approach is function chaining, where you just type a dot and the function after will be applied to the return value of the previous and it goes on and on :)

const template = 'hh:mm:ss:t'
const newTemplate = template.replace('hh','10').replace('mm','20').replace('ss','55').replace('t','pm')
console.log(newTemplate)

// The goal of composition is to 'generate higher order function by combining simple functions ' 

const compose = (...fn) => 
        (arg) => 
            fn.reduce(
              (composed, f) => f(composed),
              arg
            )


// Since javascript let you slip away from the functional paradgim, watch out for these 3 at all times: 

// 1. keep data immutable 
// 2. keep functions pure 
// 3. use recursion over looping whenever possible 

// Finalization Imperative approach vs Declarative approach 

// Imperative Approach

  setInterval(logClockTime, 1000);

  function logClockTime() {
  // Get Time string as civilian time
  var time = getClockTime();
  // Clear the Console and log the time
  console.clear();
  console.log(time);
  }

  function getClockTime() {
  // Get the Current Time
  var date = new Date();
  var time = "";
  // Serialize clock time
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
  }

if (time.hours == 12) {
    time.ampm = "PM";
    }
    else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
    }
    // Prepend a 0 on the hours to make double digits
    if (time.hours < 10) {
    time.hours = "0" + time.hours;
    }
    // prepend a 0 on the minutes to make double digits
    if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
    }
    // prepend a 0 on the seconds to make double digits
    if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
    }
    // Format the clock time as a string "hh:mm:ss tt"
    return time.hours + ":"
    + time.minutes + ":"
    + time.seconds + " "
    + time.ampm;
  }
                  
                        