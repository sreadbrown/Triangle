var triangletracker = function(a,b,c) {
  var sumab = a+b;
  var sumbc = b+c;
  var sumca = c+a;
    if ((sumab <= c) || (sumbc <= a) || (sumca <= b)) {
      return "not a triangle"
    }
    else if ((a === b) && (a !== c)) {
      return "isoceles"
    } else if ((b === c) && (b !== a)) {
      return "isoceles"
    } else if ((c === a) && (a !== b)) {
      return "isoceles"
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
