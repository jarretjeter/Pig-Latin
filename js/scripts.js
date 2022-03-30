function pigLatin(string) {
  const vowels = "a e i o u"
  let stringArray = string.split("");
  for (i=0; i < stringArray.length; i++) {
    console.log(stringArray[i])
    if (vowels.includes(stringArray[i]))  {
      return 1
    }
  }
  return -1
};