// Overview
// One of the first steps for many TDD projects is determining
// which tests need to be written for a project, feature, or piece of code.
// These range from unit tests (at a very low level, what result we should
// expect from calling a specific function or piece of code), to functional
// tests (what does our website or app need to do when a user performs some action).
// In this workshop, you are going to write instructions for tests, often known as test
// specifications, or test specs, for a series of prompts.

// Unit test specifications should take the form of:
// Example: For the prompt "A function called "addition" that returns the sum of two input integers",
// Your tests might include:
// Expect addition(2, 3) to be a number
// Expect addition(2, 3) to be equal to 5
// Expect addition("a", 3) to be an error

// Functional test specifications can be worded slightly more naturally:
// When a user [does something with some parameters], [some thing should happen]
// Example: For the prompt was "A login and signup page that allows Single Sign-On with Google",
// your tests might include:
// 1. When a user clicks "Log In" without filling in any information, they should be shown an error and prompted
// to sign up if they have not yet.
// 2. When a user clicks "Log In" but has filled out an incorrect login or password, they should be shown an error
// and prompted to sign up if they have not yet.
// 3. When a user clicks "Log In" and has filled in their login and password correctly, they should be taken to their dashboard.
// 4. When a user clicks "Create Account" without filling in any information, they should be shown an error.
// 5. When a user clicks "Create Account" with an invalid email address or password, they should be shown an error.
// 6. When a user clicks the "Sign Up with Google" button, they should be taken through the Google authentication process.
// 7. When a user clicks "Log In with Google", they should be logged in through Google, or taken through the
// Google authentication process if they do not already have an account.
