/*
Input Format
A single integer denoting the size of the staircase.

Output Format
Print a staircase of size  using # symbols and spaces.

Sample Output

     #
    ##
   ###
  ####
 #####
######

*/

function staircase(steps) {
  var answer = '';

  for(var i = 0; i < steps; i++) {
    for(var spaces = 0; spaces < steps - i - 1; spaces++) {
      answer += ' ';
    }

    for(var stars = 0; stars <= i; stars++) {
      answer += '#';
      if(stars === i) {
        answer += '\n';
      }
    }
  }

  console.log(answer);

}

staircase(6);