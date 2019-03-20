// Section #1 - Arrays

// Challenge 1 - where are we in the loop ? 

chl1 = (arr, targ) => {
    for (var i = 0; i < arr.length; i++){
        if ( arr[i] == targ ) {
            return i 
        }
    }
}

let arr = [1,2,3,4,5]
var ans = chl1(arr,2)
console.log(ans)


// Challenge 2 - make total of array's values

totalarr = arr => {
    let total = 0
    for (var i = 0; i <arr.length; i++){
        total += arr[i]
    }
    return total 
}

let arr2 = [1,2,3,4,5]
let ans2 = totalarr(arr2)
console.log(ans2)


// Challenge 3 - remove an item from an array 

removeitm = (arr, item) => {
    for (var i = 0; i < arr.length; i++){
        if ( arr[i] == item) {
            arr.splice(i, 1)
        }
    }
    return arr
}

let arr3 = [1,2,3,4,5]
var ans3 = removeitm(arr3,5)
console.log(ans3)


// Challenge 4 - add an item to the end of an array 

// #1 first method - dirt!

addItem = (arr, item) => {
    last = arr.slice(-1)
    arr.splice(last,0, item)
    return arr
}

let arr4 = [1,2,3,4,5]
var ans4 = addItem(arr4,8)
console.log(ans4)

// #2 a much better way 

addItem2 = (arr,item) => arr.push(item)

let arr5 = [1,2,3,4,5]
var ans5 = addItem(arr5,8)
console.log(ans5)

// Challenge 5 - create an array from two arrays 

concatarr = (arr1,arr2) => arr = arr1.concat(arr2) 

let arr6 = [1,2,3]
let arr7 = [4,5,6]
var ans6 = concatarr(arr6,arr7)
console.log(ans6)


// Challenge 6 - add in item anywhere in the array 

addOptItem = (arr,index,item) => {
    arr.splice(index,0,item)
    return arr
}

let arr8 = [1,2,3,4,5,6]
var ans7 = addOptItem(arr8,3,7)
console.log(ans7)


// # Section 2 - Objects and Context

// Challenge 1 - Call() and Apply()

// Raw
fullnameFunc =  {
    firstname : 'James',
    lastname : 'Milner',
    fullname : function (theother, andother) {
        return this.firstname + " " + this.lastname + " " + theother + " " + andother
    }
}

var ans8 = fullnameFunc.fullname()
console.log(ans8)

// Call #1 

differentName = {
    firstname: 'Peter',
    lastname: 'Crouch'
}

var ans9 = fullnameFunc.fullname.call(differentName)
console.log(ans9)

// Call #2 - with arguments

var ans10 = fullnameFunc.fullname.call(differentName, "Olic", "Sivic")
console.log(ans10)


// Apply - with arguments  

var ans11 = fullnameFunc.fullname.apply(differentName, ['Olic', 'Sivic'])
console.log(ans11)


// # Section 3 - Functions 

// Challenge 1 - Partial Functions - Functional

fullAdj = (adj1,adj2,adj3) => {
    return adj1 + adj2 + adj3
}

partilAdj = (adj1) => {
    return finalize = (adj2,adj3) => {
        return fullAdj(adj1,adj2,adj3)
    }
}

const partially = partilAdj('young')
console.log(partially)

const fully = partially('beautiful', 'woman')
console.log(fully)

// Partial functions - Class based

class adjbuilder {

    constructor (adj1) {
        this.adj1 = adj1
    }

    adjGenerator (adj2,adj3) {
        return this.ajd1 + adj2 + adj3
    }

}

const partialClass = new adjbuilder('Young')
const fullClass = partialClass.adjGenerator('Beautiful', 'woman')
console.log(fullClass)


// Challenge 2 - Function Currying 
// Currying is the process of transforming a function that takes all arguments at once to a series of functions that take one variable each at a time

normalSumFunction = (x,y) =>   x * y 

currySumFunction = (x) => (y) =>  x * y 

const ans12 = currySumFunction(4)(3)
console.log(ans12)


// Final Section 

// Challenge 1 - Local Storage 


localStorage.setItem('name','pouya')

var cat = localStorage.getItem('family')

console.log(cat)

localStorage.removeItem('name')

console.log(cat)

// Challenge - Promises


const getMembers = count => new Promise((resolves, rejects) => {
    // get the URL API
    const api = 'https://api.randomuser.me/?nat=US&results=${count}'
    // create HTTPrequest object
    const request = new XMLHttpRequest
    // 0 Unset
    request.open('GET',api)
    // 1 Opened because open() has been called 
    request.onload = () => 
        // Loading 
        (request.status === 200) ? // if everything is okay! 
        resolves(JSON.parse(request.response).results) : // parse the request into javascript object and access the results value in that object 
        // if not! 
        rejects(Error(request.statusText)) // read the status code, so we shall know the issue 
    request.onerror = (err) => rejects(err)
    // sending out the actual request
    request.send()

})


getMembers(5).then(
    members => console.log(members),
    error => console.log( new Error ('Cannot load from the API'))
)

