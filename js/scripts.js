var triangletracker = function(a,b,c) {
  // if (((a+b) <= c) || ((b+c) <= a) || ((a+c) <= b)) {
  //   return "not a triangle"
  // }

  // if ((a === b) && (b === c)) {
  //   return "equilateral"
  // }

  // if ((a === b) && (a !== c) || (b === c) && (b !== a) || (c === a) && (a !== b)) {
  //   return "isoceles"
  // }

  if (true) {

  }

};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var result = triangletracker(a,b,c);

    $("#triangetype").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
