function pigLatin(string) {
  const vowels = "a e i o u"
  console.log(string)
  if (vowels.includes(string))  {
    return 1
  }
  return -1
};