/* businnes logic START */

var output = "";

var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
var romanNumeral = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"]


/* this works */
// var numberToRoman = function(number) {
// for (var index = 0; (number - decimalValue[index]) >= 0; index += 1){
//
// };
//  output = output.concat(romanNumeral[index - 1]);
// };
/* this works */

/* this is temporary */

var numberToRoman = function(number) {
  for (/*var index2 = 0*/; number/*- decimalValue[index2]) >*/!= 0;/* index2 += 1*/){
    // alert("we are in the parent loop");
    for (var index = 0; (number - decimalValue[index]) >= 0; index += 1){
      // alert("we are in the child loop");
      };
      number = number - decimalValue[index - 1];
      // alert(number);
      output = output.concat(romanNumeral[index - 1]);
    };
  };

/* this is temporary */

/* businnes logic END */



/* user logic START */

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault;
    var userInput = parseInt($("#userInput").val());
    numberToRoman(userInput);
    alert(output);
  })

});

/* user logic END */
