// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  let firstWord = arr[0];
  let capitalizedWord = firstWord[0].toUpperCase() + firstWord.slice(1);

  return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
