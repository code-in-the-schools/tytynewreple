var rectangle = {
  width: 200,
  height: 100
};

function countPerimeter () {
  var width = rectangle.width;
  var height = rectangle.height;
  var result = width + height + width + height;
  console.log("the perimeter of the rectangle is " + result);
}

countPerimeter();

