const myArray = [2,3,4,5,6]
console.log(myArray[myArray.length-1])

function isPalindromeFirst(word){

  // 0(n)
  // 0(n) + 0(n) + 0(n) + 1
  //0(3n+1)
  //0(n)

  if (word.split("").reverse().join("") === word) return true
  return false
}

function isPalindrome(word) {
  for(i=0; i<word.length/2; i++){
    const j = word.length-1-i
    const startingChar = word[i]
    const endingChar = word[j]

    if (startingChar !== endingChar) return false
    console.log(startingChar)
    console.log(endingChar)
    return true
    }
  }

let response = isPalindromeFirst("racecar")
console.log(`The word ${response?"is":"is not"} a palindrome`)


/*
Function takes a string
Inspect each character
Split the string into an array of characters
Return array of characters that have been reversed--
iterate through the characters--
Verify the strings match or not
Returns true or false
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


