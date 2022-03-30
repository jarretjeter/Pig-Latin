function pigLatin(string) {
  const vowels = "a" + "e" + "i" + "o" + "u"
  let stringArray = string.toLowerCase().split("");
  let vowelCount = 0
  for (i=0; i < stringArray.length; i++) {
    console.log(stringArray[i])
    if (vowels.includes(stringArray[i]))  {
      vowelCount++
    }
  }
  return vowelCount;
};