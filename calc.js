function isNum(num){
  return num!=="x"&&num!=="-"&&num!=="+"&&num!=="/";
}
function convert(arr){
  for(var i=0;i<arr.length;i++){
    if(isNum(arr[i])){
        arr[i] = parseFloat(arr[i]);
    }
  }return arr;  
}
function calc(arr){
  if(arr.length===0){
    return "error";
  }else if(arr.length===1&&isNum(arr[0])){
    return parseFloat(arr[0]);
  }else if(arr.length===1&&!isNum(arr[0])){
    return "error";
  }else if(arr.length>1){
    if(isNum(arr[0])){
       if(arr[1]==="x"){
         var temp = Math.round(arr[0]*arr[2] * 100) / 100;
         arr.splice(3, 0, temp);
         return calc(arr.slice(3, arr.length));
      }else if(arr[1]==="/"){
         var temp = Math.round(arr[0]/arr[2] * 100) / 100;
         arr.splice(3, 0, temp);
         return calc(arr.slice(3, arr.length));
      }else if(arr[1]==="+"){
         var tempArr = arr.slice(2, arr.length);
         return arr[0] + calc(tempArr);
      }else if(arr[1]==="-"){
         var tempArr = arr.slice(2, arr.length);
         return arr[0] - calc(tempArr);
      }
    }
  }
}

$(document).ready(function(){
  var exp = 0;
  var first = 0;
  var second = 0;
  $('#ac').click(function(){
    exp = 0;
    first = 0;
    second = 0;
    $("#display").html(exp);
  })
  $('#multiple').click(function(){
    exp = exp + " x ";
    var temp = first * second;
    $("#display").html(exp); 
  })
  $('#divide').click(function(){
    exp = exp + " / ";
    $("#display").html(exp);
  })
  $('#plus').click(function(){
    exp = exp + " + ";
    $("#display").html(exp);
  })
  $('#del').click(function(){
    exp = exp.substring(0, exp.length-1);
    $("#display").html(exp);
  })
  $('#minus').click(function(){
    exp = exp + " - ";
    $("#display").html(exp);
  })
  $('#equal').click(function(){
    var arr = exp.split(' ');
    arr = convert(arr);
    var result = calc(arr);
    exp = result;
    $("#display").html(result);
  })
  $('#one').click(function(){
    if(exp===0){
      exp = "1";
    }else{
      exp = exp + "1";
    }
    $("#display").html(exp);
  })
  $('#two').click(function(){
    if(exp===0){
      exp = "2";
    }else{
      exp = exp + "2";
    }
    $("#display").html(exp);
  })
  $('#three').click(function(){
    if(exp===0){
      exp = "3";
    }else{
      exp = exp + "3";
    }
    $("#display").html(exp);
  })
  $('#four').click(function(){
    if(exp===0){
      exp = "4";
    }else{
      exp = exp + "4";
    }
    $("#display").html(exp);
  })
  $('#five').click(function(){
    if(exp===0){
      exp = "5";
    }else{
      exp = exp + "5";
    }
    $("#display").html(exp);
  })
  $('#six').click(function(){
    if(exp===0){
      exp = "6";
    }else{
      exp = exp + "6";
    }
    $("#display").html(exp);
  })
  $('#seven').click(function(){
    if(exp===0){
      exp = "7";
    }else{
      exp = exp + "7";
    }
    $("#display").html(exp);
  })
  $('#eight').click(function(){
    if(exp===0){
      exp = "8";
    }else{
      exp = exp + "8";
    }
    $("#display").html(exp);
  })
  $('#nine').click(function(){
    if(exp===0){
      exp = "9";
    }else{
      exp = exp + "9";
    }
    $("#display").html(exp);
  })
  $('#zero').click(function(){
    if(exp===0){
      exp = "0";
    }else{
      exp = exp + "0";
    }
    $("#display").html(exp);
  })
  $('#bot').click(function(){
    if(exp!==0){
      exp = exp + ".";
    }
    $("#display").html(exp);
  })
  $('#sine').click(function(){
    if(exp!==0){
      exp = exp + "-";
    }
    $("#display").html(exp);
  })
})
