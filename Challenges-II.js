// regex practice
// Bracket - range of characters

const str = 'Jimmy is playing football'
const regx = /[jimmy|is]/g
const ans1 = str.match(regx)
console.log(ans1)

const notStr = '21/11/1991'
const notRegx = /[^/]/g
const notAns1 = notStr.match(notRegx)
const Stringfy = notAns1.toString()
console.log('not:'+Stringfy)


// Metacharacters 
// whitespace finder

const str2 = '1990 is my birthdate'
const regx2 = /\s/g
const ans2 = str2.match(regx2)
console.log(ans2)

// finding a match at the beginning or at the end of the year

const str3 = 'my name is pouya'
const regx3 = /uya\b/g
const regx4 = /\buya/g

const ans3 = str3.match(regx3)
console.log(ans3)

const ans4 = str3.match(regx4)
console.log(ans4)


// Quantifiers 
const str4 = 'Hello Pooya'
const regx5 = /poo?/g
const ans5 = str4.match(regx5)
console.log(ans5)


// Exec

const regx6 = /e/.exec('is there any e in here?')
console.log('Yay, there is one'+regx6[1]+'at the index of '+regx6.index)


// More complicated Stuff

const str5 = '100 1000 10000'
const regx7 = /\d{4}/g
const ans6 = str5.match(regx7)
console.log(ans6)


const str6 = 'wwzpa?'
const regx8 = /[a-c]/g
const ans7 = str6.match(regx8)
console.log(ans7)


const str7 = 'will we not show the P?'
const regx9 = /[^W]/gi
const ans8 = str7.match(regx9)
console.log(ans8)

// Just keeping on 

const str8 = 'will we find blue or red?'
const regx10 = /(red|blue)/g
const ans9 = str8.match(regx10)
console.log(ans9)


// Some more meta characters

// using  . 

const str9 = 'poula douma gousa'
const regx11 = /u.a/g
const ans10 = str9.match(regx11)
console.log(ans10)


// using w for finding words

const str10 = 'this is great!@$#'
const regx12 = /\w/g
const ans11 = str10.match(regx12)
console.log(ans11)

// using W for not finding words 

const str11 = 'not words should be found 12 &@#'
const regx13 = /\W/g
const ans12 = str11.match(regx13)
console.log(ans12)

// using d for finding digits 

const str12 = '123'
const regx14 = /\d/g
const ans13 = str12.match(regx14)
console.log(ans13)


// using D for non-digits 

const str13 = 'ab123'
const regx15 = /\D/g
const ans14 = str13.match(regx15)
console.log(ans14)


// using s for finding whitespaces 

const str14 = 'there is a whitespace'
const regx16 = /\s/g
const ans15 = str14.match(regx16)
console.log(ans15)


// using S for not finding whitespaces 

const str15 = 'eveyrthing   except    space      '
const regx17 = /\S/g
const ans16 = str15.match(regx17)
console.log(ans16)


// using b for finding a word that begins or ends with the given value

const str16 = 'find the ones that start with pouya, like pouya, okay? pouya'
const regx18 = /ya\b/g
const ans17 = str16.match(regx18)
console.log(ans17)


// using B for finding a word not at the beginning or end of the given value

const str17 = 'noschool is badschool'
const regx19 = /\Bol/g
const ans18 = str17.match(regx19)
console.log(ans18)

// using n+ for finding any string that contains at least one of the given value 

const str18 = 'pluto mluto sluto oluto'
const regx20 = /o+/g
const ans19 = str18.match(regx20)
console.log(ans19)

// using n{X} to find sequence of X n's 

const str19 = 'poooya goooya soooya doooya'
const regx21 = /\wo{3}/g
const ans20 = str19.match(regx21)
console.log(ans20)

// using n{X,Y} to find any string that contains a sequence of x to Y n's 

 const str20 = 'pooya doooya gooya loooooya sooya'
 const regx22 = /\wo{3,4}/g
 const ans21 = str20.match(regx22)
 console.log(ans21) 

 // using n{X,} to find any string that contains a sequence of atleast x n's 

 const str21 = 'pooya doooya sooooya looya'
 const regx23 = /\wo{3,}/g
 const ans22 = str21.match(regx23)
 console.log(ans22)


 // using n$ for matching any string with n at the end of it

 const str22 = 'plus mlus surplus'
 const regx24 = /\us$/g
 const ans23 = str22.match(regx24)
 console.log(ans23)


 // using ^n for matching any string with at the start of it 
 
 const str23 = 'pouya pooir plururi poora'
 const regx25 = /^pou/g
 const ans24 = str23.match(regx25)
 console.log(ans24)


 // using ?=n for matching any string that is followed by a specific string n 

 const str24 = 'is pouya going to sleep?'
 const regx26 = /is(?= pouya)/g
 const ans25 = str24.match(regx26)
 console.log(ans25) 
 

 // using ?!n for matchin any string that is not followed by a specific string n 

 const str25 = 'is pouya should not be found'
 const regx27 = /is(?!pouya)/g
 const ans26 = str25.match(regx27)
 console.log(ans26)