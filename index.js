// Overview Examples:
// *Functional test specifications can be worded slightly more naturally:

// When a user [does something with some parameters], [some thing should happen]
// Example: For the prompt was "A login and sign-up page that allows Single Sign-On with Google",
// your tests might include:
// 1. When a user clicks "Log In" without filling in any information, they should be shown an error and prompted
// to sign up if they have not yet.
// All possible users' actions to react with the "Log in" page you can be possible think.

// 2. Overview Workshop:
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

// ## Integration Test:
// - The ability to calculate any numbers result
// - If user uses a string and and integer numbers give some result
// - Gives some examples of correct results to the user
// Exaples:
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

// - If the cart is empty should show in a corner of the screen the number (0) for the user to have
// a visual of how many items he picked up.
// - If the cart is empty, it should have a link that takes the client to the main page for shopping.
// - The function should save any object the client reach out even though they forgot to picked the items.
// - The function should have an option how clients want to buy (shipping, pickup, delivery).
// - The function should have the option to add clients' zip code to tell them if the item is available in
// some near location to pick up.
// - If the gueest don't want to create an account the function should save what he/she bought in case
// they want to buy it again in the future to save time for the user.

// SOLUTION INSTRUCTOR:

// Block 18 Test Specs
// Unit Tests
// A function called "multiplication" that returns the product of the two input numbers.
// expect multiplication(2, 3) to be a number
// expect multiplication(2, 3) to be equal to 6
// expect multiplication("a", 3) to throw an error
// expect multiplication() to throw an error
// expect multiplication(-2, 3) to be equal to -6
// expect multiplication(2, -3) to be equal to -6
// expect multiplication(-2, -3) to be equal to 6
// expect multiplication(0, 3) to be equal to 0
// expect multiplication(2, 0) to be equal to 0
// expect multiplication("country rooooaddd take me hooooome") to throw an error
// expect multiplication(2, 3, 4, 5, 6) to be equal to 6
// A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
// expect concatOdds([1], [1]) to be an array
// expect concatOdds([1], [1]) to have length 1`
// expect concatOdds([1], [1]) to be equal to [1]
// expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array
// expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array of length 5
// expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be equal to [-1, 1, 3, 9, 15]
// expect concatOdds([], []) to return []
// expect concatOdds([2, 4, 6], [2, 4, 6]) to return []
// expect concatOdds([1, 3, 5], [2, 4, 6]) to return [1, 3, 5]
// expect concatOdds([1, 3, 5], []) to return [1, 3, 5]
// expect concatOdds([undefined, undefined, undefined], [1]) to return [1]
// expect concatOdds(3, 2, 1, 9, 1, 1, 1, 4, 15, -1) to throw an error
// expect concatOdds(['a'], ['b']) to throw an error
// expect concatOdds(undefined, undefined) to throw an error
// Functional Tests
// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
// Loading the Cart
// expect a user with an empty cart that clicks on the checkout to see an empty cart and be given a button to "Continue Shopping"
// expect a user to be able to add an item to their cart
// expect a user to be able to add multiple of the same item to their cart
// expect a user to be able to remove an item from their cart
// expect a user to be able to decrement the count of items in their cart
// expect a user to be able to add an item to their
// Data Persistence
// expect a user to be able to log in and continue checkout without losing their items
// expect a user to be able to create an account, log in, and continue checkout without losing their items
// expect a user to be able to continue as guest and continue checkout without losing their items
// expect a user to be able to start to create an account, but change their mind, and return to continue as guest, and continue checkout without losing their items
// expect a user to be able to attempt to log in, but forget their password, and return to continue as guest, and continue checkout without losing their items
// expect a user to be able to attempt to log in, but forget their password, go through the reset password process, log in finally, and continue checkout without losing their items
// expect a user to be able to attempt to log in, but forget their username, go through the username recovery process, log in finally, and continue checkout without losing their items
// expect a user to be able to log in, but log out and log in later on a different device, and continue checkout without losing their items
// Checkout Steps
// Confirmation
// expect a user to be able to click checkout and be given the option to login, create account, or continue as guest (from anywhere)
// expect a user to see their cart after clicking checkout
// expect a user to confirm their items
// expect a user to be able to return back shopping during checkout and save the progress
// Shipping
// expect a user to be able to add shipping information
// expect a user to be able to select shipping methods
// expect a user to be able to upgrade to a premium membership
// expect a user to be able to select pickup as an option
// expect a logged-in user to have their shipping address saved to their account
// expect a guest user to not have their shipping address saved
// expect a logged-in user to be able to choose from multiple saved shipping details
// expect a user to be able to return back shopping during checkout and save the progress
// Payment
// expect a user to be able to add credit card information
// expect a user to be able to sign up for a new credit card
// expect a user to be able to apply discount code
// expect a declined card to allow the user to change payment methods
// expect a guest user's card information not to be saved
// expect a logged-in user to have their successful card payment save their card details to their account
// expect a logged-in user's saved payment methods be encrypted
// expect a logged-in user to be able to choose from multiple saved payment methods
// expect a logged-in user not to see expired saved payment methods
// expect a logged-in user to be able to remove a saved payment methods
// expect a user (human) to pass a CAPTCHA test
// expect a user (robot) to fail a CAPTCHA test
// expect a user to not be able to continue to next step until all required fields are filled out
// expect a user to be able to return back to shipping during checkout and save the progress
// expect a user to be able to return back to shop during checkout and save the progress
// expect a user's valid payment method be successfully applied to the order
// Final Confirmation
// expect a user to be able to confirm the order
// expect a user to be able to get an email confirmation
// expect a user to be able to return back to shopping after checkout
