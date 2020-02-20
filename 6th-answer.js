//No 6 Make a function that can be use to convert decimal number into binary number

function decimalToBinary(number) {
  let binary = [];
  while (number > 0) {
    // console.log(binary);
    binary[binary.length] = number % 2;
    number >>= 1;
  }
  console.log("Binary number: " + binary.reverse().join(""));
}

decimalToBinary(6);
