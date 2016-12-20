function getName(object) {
  return object.name;
}

function totalLetters(array) {
  return array.join('').length
}

function keyValue(key, value) {
  var keyString = key;
  var valueString = value;
  var myObj = new Object();
  myObj ={[keyString] : valueString};
  return myObj
}

function negativeIndex(array, negativeNumber) {
  var myArray = array;
  return myArray.splice(negativeNumber, 1).toString()
}

function removeM(string) {
  return string.split('m').join('')
}

function printObject(object) {
  var keys = Object.keys(object);
  var values = Object.values(object);
  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ' is ' + values[i])
  }
}

// if item in strArray matches any item in vowelArray push item into new array and print the new array.

function vowels(string) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var strArray = string.split('');
  var newArray = [];
  for (var i = 0; i < strArray.length; i++) {
    for (var j = 0; j < strArray.length; j++) {
      if (vowelArray[i] === strArray[j]) {
        newArray.push(strArray[j]);
      }
    }
  }
  return newArray
}



function twins(array) {
  var arraynium = [];
  var verdict = true;
  if (array.length % 2 !== 0) {
    verdict = false;
  } else {
    while (array.length) {
      arraynium.push(array.splice(0, 2));
    }
    for (var i = 0; i < arraynium.length; i++) {
      if (arraynium[i][0] !== arraynium[i][1] ) {
        verdict = false;
      }
    }
  }
  arraynium = [];
  return verdict
}

function or(array) {
 var isIt = true;
  
 array.forEach(function(element) {
  if (!element) {
    isIt = false
  }
 })
 return isIt
}

function or(array) {
  var isIt = false;
  if (array.length < 1) {
    return false
  } else {
    array.forEach(function(element) {
      if (element) {
        isIt = true
      }
    })
    return isIt
  }
}

function unique(array) {
  var d = {};
  var newArray = [];
  array.forEach(function(element) {
    if (!(element in d)) {
      d[element] = true;
      newArray.push(element)
    }
  })
  return newArray
}










































