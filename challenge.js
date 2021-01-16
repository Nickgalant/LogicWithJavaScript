const { EOF } = require("dns");

var input = require("fs").readFileSync("stdin", "utf8");

let quantidade = 0;
let item = 0;
let contagem = 0;
while(contagem<3){
  quantidade =  parseInt(input,10);
  item = input;
  contagem++; 
let tmp = item.split(' ');
let arr = tmp.map(item=>{
  return parseInt(item,10);
});
let bigger = 0;
  for(let i = 0; i < quantidade; i++){
    for(let y = quantidade-1; y > 0; y--){
      if(arr[i]>arr[y]){
        if(arr[i]>bigger){
          bigger= arr[i];
        }
      }
    };
  }
  if(bigger<10){
    console.log(1);
  }else if(bigger <20){
    console.log(2);
  }else if(bigger >= 20){
    console.log(3);
  }}