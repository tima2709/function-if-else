// let array = [0, 1, 2, 3, 4, 5, 6]
//
// console.log(array. map(el => el + 1))

// let array = [0, 1, 2, 3, 4, 5, 6]
//
// console.log(array.filter((el, index) => el !== 4))



// function handleClick(){
//     let a = 2
//     return a + 2 * a
// }
//
// console.log(handleClick())


// function handleSum(user, day){
//     if (day > 31){
//         return 'error'
//     } else {
//         if (day % 2 === 0){
//             return `welcome, "${user}"! how are you? today is ${day}, great day`
//         }
//
//         else {
//             return `welcome, "${user}"! how are you? today is ${day}, simple day`
//         }r
//     }
// }
//
// console.log(handleSum('Tima', 23))

// user admin true welcome, 'user'
// false not correct user

// function handleSum(user){
//     if (user === 'admin'){
//         return 'True welcome'
//     }
//     else {
//         return 'False not correct user'
//     }
// }
//
// console.log(handleSum('admin'))

// 'num' is equals of 50
// 'num' is not correct

// function handleSum(num){
//     if (num === 50){
//         return 'correct'
//     }
//     else {
//         return 'is not correct'
//     }
// }
//
// console.log(handleSum(15))

// today is 'day' of february
// on february only 28 day, your day is 'day' of another month

// function handleSum(day){
//     if (day <= 28){
//         return `today is ${day} of February`
//     }
//     else if (day === 29 || day === 30 || day === 31) {
//         return `on february only 28 day, your day is ${day} of another month`
//     } else if (day > 32){
//         return 'in month max 31 days'
//     }
//
// }
//
// console.log(handleSum(27))

// 'user' 'age' old, welcome
// 'user' 'age' old, rejected

// function handleSum(user, age){
//     if (age > 18){
//         return `${user} ${age} years old, welcome`
//     }
//     else {
//         return `${user} ${age} years old, rejected`
//     }
// }
//
// console.log(handleSum("ahiles", 21))

// 'user' name is too short (min 3)
// 'user' name is accepted

// function handleSum(user){
//     if (user.length < 3){
//         return `${user} name is too short (min 3)`
//     }
//     else {
//         return `${user} name is accepted`
//     }
// }
//
// console.log(handleSum('jim'))

// 'user' name is too long (max 5)
// 'user' name is accepted

// function handleSum(user){
//     if (user.length > 5) {
//         return `${user} is too long (max 5)`
//     }
//     else {
//         return 'name is accepted'
//     }
// }
//
// console.log(handleSum('bigbo'))

// function handleSum(age){
//     if (typeof(age) === 'string'){
//         return `${age} must be number`
//     }
//     else if (age === 20) {
//         return `${age} is accepted`
//     }
//     else {
//         return `${age} is not accepted`
//     }
// }
//
// console.log(handleSum(20))

// 'age' must be a number ('20') - там просто проверка на тип аргумента, но не на само число.

// function string(age){
//     if (typeof (age) === 'string'){
//         return `type of argument must be number`
//     }
//     else {
//         return 'accepted'
//     }
// }
//
// console.log(string(25))

// 'age' must be a string (20)
// 'age' must be older then 23

// function string(age){
//     if (typeof (age) === 'number'){
//         return `${age} must be string`
//     }
//     else if (age > 23){
//         return `${age} is accepted`
//     }
//     else {
//         return `${age} years old is not accepted, age must be older then 23`
//     }
// }
//
// console.log(string('21'))

// function dayoftheweek(today){
//     if (today > 7){
//         return 'There is no such a day'
//     } else if (today > 5){
//         return 'Today is weekend'
//     }
//     else if (today === 1) {
//         return 'Today is monday'
//     }
//     else if (today === 2) {
//         return 'Today is tuesday'
//     }
//     else if (today === 3) {
//         return 'Today is wednesday'
//     }
//     else if (today === 4) {
//         return 'Today is thursday'
//     }
//     else if (today === 5) {
//         return 'Today is friday'
//     }
//     else if (today === 0){
//         return 'zero means that you are dead'
//     }
//
// }
//
// console.log(dayoftheweek(0))