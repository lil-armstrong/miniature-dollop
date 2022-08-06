/*
Given an array of integer numbers and an integer target. 
Create a function that returns the two numbers such that they add up to the target
You may assume taht each input would have exactly one solution, 
and you may not use the same element twice
Answer can be returned in any order
*/

/**
 * @function solution - Fn returns a tuple such that each adds up to the target
 * @param {Array<number>} input Array of integer input
 * @param {number} target Numeric target
 * @returns
 */
function solution(input, target) {
  for (let x = 0; x < input.length; ++x) {
    for (let y = x + 1; y < input.length; ++y) {
      if (input[x] + input[y] === +target) {
        return [input[x], input[y]];
      }
    }
  }
  return [];
}

// Example
const input = [2, 7, 11, 15],
  target = 9;
// Expected output: [2, 7]
console.log(solution(input, target));
