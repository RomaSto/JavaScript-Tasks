/*
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
  any elements with the same value next to each other and preserving the original order of elements.
*/
module.exports = function (input) {
 if (Array.isArray(input) !== true)
 {
   input = input.split('');
 }
 else
 {
   for (var i = 0, j = 1, len = input.length; i < len; i++, j++)
   {
     if(input[i] === input[j]);
     {
       input.splice(j, 1)
     }
   }
 }
 return input;
};
