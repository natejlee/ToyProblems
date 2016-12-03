function forEach(arr, iterator) {
  var tempArr = arr;

  if(Array.isArray(tempArr)) {
    for(var index = 0; index < tempArr.length; index++) {
      iterator(tempArr[index], index, tempArr);
    }
  } else {
    for(var key in tempArr) {
      iterator(tempArr[key], key, tempArr);
    }
  }

  arr = tempArr;
  return arr;
}

