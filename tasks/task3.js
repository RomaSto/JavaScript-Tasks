/*
  Longest Palindrome
  Find the length of the longest substring in the given string s that is the same in reverse.
  As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
  If the length of the input string is 0, return value must be 0.
*/
module.exports = function (str) {
  //your perfect code here
  var palindromeLength = 0;
  if (str[0] === 0)
  {
    return 0;
  }
  else
  {
    for (var i = 0, len = str.length; i < len; i++)
    {
      if (str[i] === reverseStr[i])
      {
        palindromeLength =+ 1;
      }
      
    }
  }
  return palindromeLength;
};
