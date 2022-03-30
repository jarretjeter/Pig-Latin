function firstVowel(string) {
  const vowels = "a" + "e" + "i" + "o" + "u"
  let stringArray = string.toLowerCase().split("");
  let vowelWord = ""
  if (vowels.includes(stringArray[0]))  {
    vowelWord = stringArray.join('') + "way" 
    return vowelWord
  }
  return string;
};

function hasConsonant(string) {
  const consonant = "b" + "c" + "d" + "f" + "g" + "h" + "j" + "k" + "l" + "m" + "n" + "p" + "q" + "r" + "s" + "t" + "v" + "w" + "x" + "y" + "z"
  let stringArray = string.toLowerCase().split("");
  let consonantLetter = ""
  if (consonant.includes(stringArray[0]) && consonant.includes(stringArray[1]) && consonant.includes(stringArray[2])) {
    stringArray.push(stringArray[0] + stringArray[1] + stringArray[2])
    stringArray.splice(0, 3)
    consonantLetter = stringArray.join('') + "ay"
    return consonantLetter
  } else if (consonant.includes(stringArray[0]) && consonant.includes(stringArray[1]))  {
    stringArray.push(stringArray[0] + stringArray[1])
    stringArray.splice(0, 2)
    consonantLetter = stringArray.join('') + "ay"
    return consonantLetter
    } else if (consonant.includes(stringArray[0])) {
      stringArray.push(stringArray[0])
    stringArray.shift();
    consonantLetter = stringArray.join('') + "ay"
    return consonantLetter
    }
  return string
}

function qu(string) {
  const qu = "qu"
  let first2chars = string[0].toLowerCase() + string[1].toLowerCase();
  if (qu === first2chars) {
    return 1
  }
  return -1
}
function ignoreNonAlpha(text) { 
  text = text.replace(/[^A-Za ]/g, "");
  text = text.toLowerCase();
  text = text.trim()
  return text
}



// for (i=0; i < stringArray.length; i++) {
//   if (vowels.includes(stringArray[i]))  {
//     vowelCount++
//   }
// }
// return vowelCount;