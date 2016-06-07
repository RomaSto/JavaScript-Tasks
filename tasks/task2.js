/*
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without
  any elements with the same value next to each other and preserving the original order of elements.
*/
module.exports = function (input) {
 var output = [];
   if (!Array.isArray(input)) {
   
   input = input.split('');
 }
 
  output[0] = input[0];
  
   for (var i = 0, len = input.length; i < len; i++) {
     
     if (input[i] !== output [output.length - 1]) {
       
         output[output.length] = input[i];
       }
   
 }
 return output;
};
