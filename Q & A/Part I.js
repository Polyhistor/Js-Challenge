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