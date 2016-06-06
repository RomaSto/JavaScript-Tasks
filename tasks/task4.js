/*
  The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
  Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
  Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
  Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
  Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
*/
module.exports = function (queue) {
  //total money clerk has
  var total = 0;
  //iterate over the array
  for (var i = 0, len = queue.length; i < len; i++) {
    //if clerk has enough money to give change
    if (queue[i] - 25 <= total) {
      // add money received
      total += 25;
    }
    //otherwise return NO
    else {
      
      return 'NO';
    }
    return 'YES';
  }
};
