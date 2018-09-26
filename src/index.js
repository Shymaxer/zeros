module.exports = function getZerosCount(number) {
  // your 
  let Res = 0;

  while(number > 0){
    number = Math.floor(number / 5);
    Res = Res + number;
  }
  return Res;
}
