// can't solve the problem.

function drawRightTriangle(rows) {
  if (rows > 0 && rows < 10) {
    var output = "";
    for (var i = 1; i <= rows; i++) {
      for (var j = 1; j <= i; j++) {
        output += j + "  ";
      }
      console.log(output);
      output = "";
    }
  } else {
    console.log("Please input a number from 1-9");
  }
}

drawRightTriangle(5);
