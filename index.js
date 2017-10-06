/**
 * Entry point. Test code here!
 */

const oldArray = ['Hey', 5, 2, 10, 12, 1, 'bob', 'Bob', 'hey']

const mappedArray = oldArray.map((element) => {
  if (typeof element === 'string') {
    return element.toUpperCase()
  } else if (typeof element === 'number') {
    return element += 1
  }
})

console.log(mappedArray)
