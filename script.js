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
//         }
//     }
// }
//
// console.log(handleSum('Tima', 23))

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

// function handleSum(day){
//     if (day <= 28){
//         return `today is ${day} of February`
//     }
//     else {
//         return `on february only 28 day, your day is ${day} of another month`
//     }
//
// }
//
// console.log(handleSum(27))

// function handleSum(user, age){
//     if (age > 18){
//         return `${user} ${age} old, welcome`
//     }
//     else {
//         return `${user} ${age} old, rejected`
//     }
// }
//
// console.log(handleSum("ahiles", 21))

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
//
// }
//
// console.log(handleSum(20))

// function string(age){
//     if (typeof (age) === 'number'){
//         return `${age} must be string`
//     }
//     else if (age > 23){
//         return `${age} is accepted`
//     }
//     else {
//         return `${age} is not accepted`
//     }
// }
//
// console.log(string('25'))

// function dayoftheweek(today){
//     if (today === 1) {
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
//     else if (today === 6) {
//         return 'Today is weekend'
//     }
//     else if (today === 7) {
//         return 'Today is weekend'
//     }
//     else if (today > 7) {
//         return 'there no such a day'
//     }
//
// }
//
// console.log(dayoftheweek(8))