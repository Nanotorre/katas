//Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

function toUnderscore(string) {
  return string.toString().replace(/[A-Z]/g, x=> "_"+x.toLowerCase()).replace(/^_/, "")
}



//  returns test_controller
console.log(toUnderscore('TestController'))


// returns movies_and_books
console.log(toUnderscore('MoviesAndBooks'));

// returns app7_test
console.log(toUnderscore('App7Test'));

// returns "1"
console.log(toUnderscore(1));