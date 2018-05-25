



// triangle 
// function triangle() {
//     var a = '';
//     for (i = 0; i < 7; i++) {
//         a += '#';
//         console.log(a);
//     }
// }
// triangle();

// FizzBuzz
// function FizzBuzz() {
    //var a = 0;
//   for(a = 0; a <= 100; a++){
//       if(a % 3 == 0 && a % 5 == 0) {
//         console.log('FizzBuzz: ' + a);
//       }
//   }
  
// }
// FizzBuzz();

function chessDesk(firstSize, secondSize) {
  var sharp = '# ';
  var sharp2 = ' #';
  
  function firstSharp(){
    for(i = 0; i < 4; i++){
      sharp = sharp + sharp;
    }
    return sharp;
  }
  function secondSharp(){
    for(i = 0; i < 4; i++){
      sharp2 = sharp2 + sharp2;
    }
    return sharp2;
  }


  var sharpSumm = firstSharp() + '\n' + secondSharp();
  var completeChessDesk = '\n' + sharpSumm + '\n' + sharpSumm + '\n';
  
  console.log(sharpSumm);
}

chessDesk();
