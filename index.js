function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var arr = ["chimpanzee", "orangutan"];
  arr.forEach(callback);
  return arr;
}

//function callback(element, index, array) {
  //return array;
//}

function doToArray(array, callback) {
  array.forEach(callback);
}
