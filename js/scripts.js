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