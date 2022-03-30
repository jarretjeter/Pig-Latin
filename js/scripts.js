function pigLatin(string) {
  const vowels = "a" + "e" + "i" + "o" + "u"
  const qu = "qu"
  let stringArray = string.toLowerCase().split("");
  let vowelCount = 0
  for (i=0; i < stringArray.length; i++) {
    if (qu.includes(string)) {
      console.log(string)
      return 1
    }
    if (vowels.includes(stringArray[i]))  {
      vowelCount++
    }
  }
  return vowelCount;
};

function qu(string) {
  const qu = "qu"
  let first2chars = string[0].toLowerCase() + string[1].toLowerCase();
  if (qu === first2chars) {
    return 1
  }
  return -1
}
