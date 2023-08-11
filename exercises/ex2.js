// * NUMBER EXERCISES


/**
 * * Question 1
 * 
 * Given two Numbers which are in the form of a Float (a decimal number),  
 * multiple the two Numbers, then return the result. Use your function in the
 * console, either by copying and pasting the function into the console, or by
 * adding this file (ex2-numbers.js) to the src attribute of the html page I 
 * provided.
 * 
 * Run the function and check the output. Try it with several different floats.
 * 
 * ? Is the output accurate?
 * 
 * @returns {Number}
 */
function addFloats() {
    let float1 = .025;
    let float2 = .025;
    // TODO Finish the function
}


/**
 * * Question 2
 * 
 * Given two Numbers in the form of a float, multiply them by a common factor 
 * to make them integers (whole numbers). To get float1 and float2 to integers
 * you will need to multiply them by at least 100. After you have turned float1
 * and float2 into whole numbers, multiply them together. Finally, divide them
 * by the same number you multiplied them by in the first step. This way you 
 * will get the correct output.
 * 
 * * We have to do this when working with floats, since they give notoriously
 * * inaccurate output when doing math.
 * 
 * @returns {Number}
 */
function betterAddFloats() {
    let float1 = .025;
    let float2 = .025;
    // TODO Finish the function
}


/**
 * * Question 3
 * 
 * Given two different Strings, both of which are in the form of a number (like
 * "10" or "2"), try to multiply, divide, modulus divide, exponentiate, or 
 * subtract the two strings. Return the output.
 * 
 * After you have completed the function, either copy and paste the function 
 * into the console or add your file to the src attribute of the module4.html
 * document. Then, run your function in the console. 
 * 
 * ? What is the output? Did you get a String or a Number?
 * 
 * @param {String} numStr1 
 * @param {String} numStr2 
 */
function stringMath1(numStr1, numStr2) {
    // TODO Finish the function.
}


/**
 * * Question 4
 * 
 * Given two different Strings, both of which are in the form of a number (like
 * "10" or "2"), try to add the two Strings together. Return the output.
 * 
 * After you have completed the function, either copy and paste the function 
 * into the console or add your file to the src attribute of the module4.html
 * document. The, run your function in the console.
 * 
 * ? What is the output? Did it add or concatenate?
 * 
 * @param {String} numStr1 
 * @param {String} numStr2 
 */
function stringMath2(numStr1, numStr2) {
    // TODO Finish the function
}


/**
 * * Question 5
 * 
 * Given two Numbers, num1 and num2, and a String, in the form of a number, 
 * try to add all three, num1, num2, and numStr1, together. Return your answer.
 * 
 * ? What kind of output do you get? What is the difference between using the +
 * ? operator with Numbers and with Strings?
 * 
 * @param {Number} num1 
 * @param {Stringumber} num2 
 * @param {String} numStr1 
 */
function additionAndConcatenation(num1, num2, numStr1) {
    // TODO Finish the function
}


/**
 * * Question 6
 * 
 * Given a Number, num1, and a regular String ("hello world"), str1, attempt to
 * divide num1 by str1. Return your answer.
 * 
 * ? What is the output? Does this work?
 * 
 * @param {Number} num1 
 * @param {String} str1 
 */
function normalStringAndNumber(num1, str1) {
    // TODO Finish the function
}


/**
 * * Question 7
 * 
 * Given a Number, num1, divide that number by 0. Return your answer. Check the
 * output in the console using one of the methods we have discussed earlier. 
 * 
 * 
 * @param {Number} num1 
 * @returns {Number}
 */
function divideBy0(num1) {
    // TODO Finish the function
}


/**
 * * Question 8
 * 
 * Given a Number, num1, use the number's toString() method to change its base.
 * There are examples of this in Numbers.pptx or W3Schools' Numbers page if you
 * aren't sure what I mean by this. toString() will accept any argument between
 * 2 and 36. This allows you to convert Numbers to any base (Binary, 
 * octal, hexidecimal, or any other between base 2 and base 36).
 * 
 * @param {Number} num1 
 * @returns {String}
 */
function changeBaseOfNumber(num1) {
    // TODO Finish the function
    
}


/**
 * * Question 9
 * 
 * Numbers have a method called toExponential() that can convert a number to a
 * string in exponential form. Given a Number, num1, convert it to a string in
 * exponential notation. Create a string version of the number with 2 trailing
 * 0s. Return your answer.
 * 
 * There are examples on both W3Schools' Number Methods page and in the 
 * Numbers.pptx.
 * 
 * * Note: You can assume that the number will be 1.5
 * 
 * @param {Number} num1 
 * @returns {String}
 */
function useExponentialNotation(num1) {
    // TODO Finish the function
}


/**
 * * Question 10
 * 
 * Numbers have a method called toFixed() that can convert a number to a string
 * with a fixed number of decimals. Given a number, num1, convert it to a string
 * with three decimal places.
 * 
 * * Note: You can assume that the number will be 1.5
 * 
 * @param {Number} num1 
 * @returns {String}
 */
function useFixedNumberOfDecimals(num1) {
    // TODO Finish the function
}


/**
 * * Question 11
 * 
 * Numbers have a method called toPrecision() that can convert a number to a 
 * string with a specified length. Given a number, num1, convert it to a string
 * that is 6 digits long. 
 * 
 * * Note: You can assume that the number will be 1.5
 * 
 * @param {Number} num1 
 * @returns {String}
 */
function useToPrecision(num1) {
    // TODO Finish the function
}


/**
 * * Question 12
 * 
 * Given a String in Number form, convert that String to a Number. There is a 
 * global function called Number() you can use to accomplish this. Return your
 * String as a Number.
 * 
 * * Note: There are multiple ways to do this, please use Number().
 * 
 * 
 * @param {String} string 
 * @returns {Number}
 */
function convertToNumber1(string) {
    // TODO Finish the function
}


/**
 * * Question 13
 * 
 * Given a String in Number form, convert that String to a Number. There is a 
 * global function called parseInt() you can use to accomplish this.
 * 
 * * Note: Please use the parseInt() method for this.
 * 
 * @param {String} string 
 * @returns {Number}
 */
function convertToNumber2(string) {
    // TODO Finish the function
}


/**
 * * Question 14
 * 
 * Given a String in Number form, specifically float form, convert that String 
 * to a Number. You can accomplish this using the global function parseFloat().
 * 
 * * Note: Please use parseFloat().
 * 
 * @param {String} string 
 */
function convertToNumber3(string) {
    // TODO Finish the function
}
