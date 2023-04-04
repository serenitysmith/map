// Higher order array methods
// .map()
// .map()
//     returns: A new array the same size as the input array
//     purpose: allows you to take an array of data and create a new array of data from it.
// higher order methods need functions passed into them asa paramater
// .map is basically getting rid of having to use a for loop, does the same thing
// num is equivilent to arr[i] in a for loop, num could be called anyting it just stands for each number in the array
// need return statement inside the brackets to tell it what you want in the new array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = arr.map(function (num) {
//     return num + 10
// });
// es6 version of the same above, does exact same thing
// const result2 = arr.map(num => num + 10)


// console.log(result)
// return of above function
// 0: 11
// 1: 12
// 2: 13
// 3: 14
// 4: 15
// 5: 16
// 6: 17
// 7: 18
// length: 8
// [[Prototype]]: Array(0)


// objects

// const users = [
//     { name: "joe" },
//     { name: "steve" },
//     { name: "lisa" }
// ]
// .map used to just return an array of the names from the object
// const result = users.map(function(user){
//     return user.name
// })
// console.log(result)