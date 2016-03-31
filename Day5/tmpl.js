console.log('app.js');
//구구단




for(var i=1; i<=9; i++){
models[i] = [];



//str += (i + "단 시작......<br>");  // 구구단 기본 폼

 for(var k=1; k<=9; k++){
   models[i][k]=i*k;

  // str += (i +"x"+ k + "=" + (i * k))+ "<br>";
}

}
return models;
}
function renderView(){

  var str = '';           //str 의 초기값 설정
  var wrap =document.getElementById('wrap');  //?
  var template=document.getElementById('templateStromg').innerHTML
  var models=[];

wrap.innerHTML = str;  // html 파일의 wrap 자리에 표시한다 str 을
}

var mpdels = initModels();
renderView(models);
