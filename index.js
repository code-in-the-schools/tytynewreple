var rectangle = {
  width: 200,
  height: 100
};

function countPerimeter () {
  var width = rectangle.width;
  var height = rectangle.height;
  var result = width + height + width + height;
  //console.log(width);
  return result;
}

var thePerim = countPerimeter();
console.log("the perimeter of the rectangle is " + thePerim);
//countPerimeter();

function getArea(){
  var width = rectangle.width;
  var length = rectangle.length;
  var solution = width * length;
  result solution;
}
var theArea = getArea();
console.log("the area of the rectangle is " + theArea);