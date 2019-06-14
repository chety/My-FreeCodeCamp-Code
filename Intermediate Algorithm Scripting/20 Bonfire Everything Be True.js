/* Bonfire: Everything Be True
DIfficulty: 2/5

Check if the predicate (second argument) returns truthy (defined) for all elements of a collection
(first argument).

For this, check to see if the property defined in the second argument is present on every element of
the collection.

Remember, you can access object properties through either dot notation or [] notation.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Object.hasOwnProperty()
Object.getOwnPropertyNames()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function truthCheck(collection, pre) {
  //No need to control to obj has pre key. If it does not have it will return undefined which is falsy
  return collection.every(obj => obj[pre]);  
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
