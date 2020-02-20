// No 1. Count total item with condition (buy 4 get 1 as a bonus);
function totalItem(price) {
  let item = price / 2500;
  let bonus = item / 4;
  let totalItem = item + bonus;
  return console.log("The total item is", totalItem);
}

totalItem(2500);
