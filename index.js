// Overview
// *Functional test specifications can be worded slightly more naturally:

// When a user [does something with some parameters], [some thing should happen]
// Example: For the prompt was "A login and sign-up page that allows Single Sign-On with Google",
// your tests might include:
// 1. When a user clicks "Log In" without filling in any information, they should be shown an error and prompted
// to sign up if they have not yet.
// All possible users' actions to react with the "Log in" page you can be possible think.

// 2. Overview:
// One of the first steps for many TDD projects is determining
// which tests need to be written for a project, feature, or piece of code.
// These range from unit tests (at a very low level, what result we should
// expect from calling a specific function or piece of code), to functional
// tests (what does our website or app need to do when a user performs some action).
// In this workshop, you are going to write instructions for tests, often known as test
// specifications, or test specs, for a series of prompts.
// Prompts:

// For each prompt below:
// 1. Read the prompt.
// 2. Identify the expectations.
// 3. Write specifications for all the tests that would be useful for that prompt.
// Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
// Try not to write extraneous tests!

// # A) A function called "multiplication" that returns the product of the two input numbers.
// ## Unit Tests:
// - The ability to multiply 2 numbers and give a number result
// - The ability to use use more mathematical action and pop-out a messege result
// - The ability to reply an error message if something is wrong
// - The ability to recognize any possible logical carracters using for the user
// Examples:
// 1. Expected addition(Numb1 + Num2) to be (2Numbers)
// 2. Expected addition(8 / 2) to be ("Correct Answer")
// 3. Expected multiplation("2" * 4) to be ("undifined")
// ## Integration Test:
// - The ability to calculate any numbers result
// - If user uses a string and and integer numbers give some result
// - Gives some examples of correct results to the user

// # B) A function called "concatOdds" takes two arrays of integers as arguments. It should return a single
// array that only contains the odd numbers, in ascending order, from both of the arrays.
// Examples:
// 1. Expected addition(Numb1 + Num2) to be (2Numbers)
// 2. Expected addition(8 / 2) to be ("Correct Answer")
// 3. Expected multiplation("2" * 4) to be ("undifined")
// ## Integration Test:
// - The ability to calculate any numbers result
// - If user uses a string and and integer numbers give some result
// - Gives some examples of correct results to the user
// function concatOdd([3, 2, 1]), [9, 1, 1, 1, 4, 15, -1]) {
//    return Math.abs(Numbers % 2) == 1;
// if (condition1) {
//  block of code to be executed if condition1 is true
// } else if (condition2) {
//  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//  block of code to be executed if the condition1 is false and condition2 is false
// }

// ## Functional Tests:
// A shopping cart checkout feature that allows a user to check out as a guest (without an account),
// or as a logged-in user. They should be allowed to do either, but should be asked if they want to create
// an account or log in if they check out as a guest.
