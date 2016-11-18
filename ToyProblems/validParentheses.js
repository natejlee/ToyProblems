/*
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(str) {
  var results = [];

  for(var i = 0; i < str.length; i++){
    if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
      results.unshift(str[i]);
    }

    if(str[i] === ')' && results.shift() !== '(') {
        return false;
    }
    if(str[i] === '}' && results.shift() !== '{') {
        return false;
    }
    if(str[i] === ']' && results.shift() !== '[') {

        return false;
    }
  }


  if(results.length === 0){
    return true;
  }

    return false;


};