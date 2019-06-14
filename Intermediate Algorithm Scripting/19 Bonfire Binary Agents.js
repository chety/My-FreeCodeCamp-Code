/* Bonfire: Binary Agents
Difficulty: 2/5

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function binaryAgent(str) {
  //parseInt("01000001",2) -> 65. change binary to decimal
  //String.fromCharCode(65) -> "A". Get ASCII value from int value
  return str.split(" ").map(item => String.fromCharCode(parseInt(item,2))).join("");  
}

binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001')
