var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var stacLetter = "";
for (var i = 0; i < array.length; i++) {
  if (!(i%5 ===0)) {
    stacLetter +=  array[i];
  } else {
    stacLetter += (" " + array[i]);
  }

   console.log(stacLetter);
}








