/*
  You live in the city of Cartesia where all roads are laid out in a perfect grid.
  You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
  The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it
  sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
  You know it takes you one minute to traverse one city block, so create a function that will return true
  if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
  Return false otherwise.
*/
module.exports = function (walkCoords) {
  //check if the walk will take exactly 10 m
  if (walkCoords.length != 9) {
    return false;
  }
  
  // check if user will return to the starting point
  else {
    // divide the array
    var away = walkCoords.slice(0, 4);
    var back = walkCoords.slice(5, 9);
    //sort two resulting arrays
    away = away.sort();
    back = back.sort();
    //check if arrays are equal
    for (var i = 0, l = away.length; i < l; i ++) {
      
      if (away[i] != back[i]) {
        // return false if arrays are different
        return false;
      }
    }
    //return true if arrays are equal
    return true;
  }
};
