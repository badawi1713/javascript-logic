// No 3. Count the height of the tree with condition, when the spring comes the height is multiply twice than before, and when the fall comes the tree's height is added by 1.

function treeHeight(height, year) {
  for (let i = 0; i < year; i++) {
    var height = height * 2 + 1;
  }
  return console.log("Tree's height: ", height);
}

treeHeight(3, 1);
