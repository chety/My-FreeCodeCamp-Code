/* Bonfire: Arguments Optional
Difficulty: 2/5

Create a function that sums two arguments together. If only one argument is provided, return a
function that expects one additional argument and will return the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an
argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Function Object
Arguments object

Code by Rafael Rodriguez & https://github.com/mildused & https://github.com/ozydesign
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function add(...args) {
  const length = args.length;
  if (length === 1 && typeof args[0] === "number") {
    return function (secondNumber) {
      return add(args[0], secondNumber);
    }
  }
  if (length === 2 && typeof args[0] === "number" && typeof args[1] === "number") {
    return args[0] + args[1];
  }

}

add(2, 3);
