Describe: pigLatin();

Test: "It recognizes a single vowel."
Code: pigLatin("a");
Expected Output: 1;

Test: "Can recognize multiple vowels."
Code: pigLatin("aa");
Expected Output: 2;

Test: "Recognizes multiple vowels in a word or sentence"
Code: pigLatin("This has vowels");
Expected Output: 4;

Test: "Regardless of capitalization"
Code: pigLatin("ThIS Has VOWels");
Expected Output: 4;

Test: "Also recognizes the combination qu"
Code: pigLatin("quick);
Expected Output: 1;

Test: "Ignores non-alphabetic characters"
Code: pigLatin("12#/ab");
Expected Output: 2;

Test: "If first alphabetic character in string is a vowel, add 'way' to the end."
Code: pigLatin("under);
Expected Output: "underway";

Test: "If first alphabetic character is not a vowel, checks for a consonant"
Code: pigLating("beak");
Expected Output: true;

Test: "If first and second character is not a vowel, checks for consonants"
Code: pigLating("break");
Expected Output: true;

Test: "If beginning with one or more consants, move beginning consonants to end of string and add "ay"
Code: pigLatin("drink);
Expected Output: "inkdray";

Test: "If string begins with 'qu' move the 'q' and 'u' + 'ay'."
Code: pigLatin("quick");
Expected Outcome: "ickquay";