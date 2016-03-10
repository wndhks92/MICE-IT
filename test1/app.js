var str="hello world"
console.log(str);
console.log(1+2);
console.log("a"+"b");
console.log(1+3==4);

var man={
  name:'jany',
  age:26,
  hobby:'cooking'
}

console.log(man);
console.log(man.age);
console.log(man.name);


if(man.name !=="jany"){
  console.log("who");
}
else{console.log("hello")
}


//--------------객체와 배열--------------

var person = {
  "nick":"aj1",
  "age":30,
  "area" : "jeju",
  "hobby":["movie","walk"]
};

console.log(person.hobby);

//--------------내장 객체---------------
console.log(window);
var date = new Date();


//-----------배열-----------------

var arr = [1,2,3];
console.log(arr);
console.log(arr.length);

//---------유효범위-----------
var nick ="aj1";
function test(){
  var age= "30";
  console.log(nick , age);
}
//test();
//console.log(age);

//--------------호이스팅---------

var name="global";
function test(){
  console.log(name);
  var name = "my"
  console.log(name);

}
//-----------alert---------
alert("안녕하세요");
var who = prompt("당신은 누구세요?");


//----------갱신하는법-----------
//var id = setInterval(test, 5000);

//--------------응용문제--------
// 1부터 100까지 출력하는 프로그램을 작성
// 1~100사이의 홀수(짝수)를 출력하는 프로그램을 작성
// 구구단 프로그램 작성


//----- 1부터 100까지 출력하는 프로그램을 작성---
 for(var i=1;i<=100;i++){
  console.log(i);
}

//----------짝수 출력------------
for(var i=1; i<=100; i++){
 if(i%2==0) {
   console.log(i)
 }
}
// ----------구구단 프로그램 작성--------
function gogodan(x,y){
  return x*y;
}

for(var i=2; i<=9; i++){
  for(var j=1;j<=9; j++){

console.log(i+"*"+j+"="+gogodan(i,j));

  }
  }

var my = prompt("첫번째수를 입력해");
var my1 = prompt("두번째수를 입력해");

alert(Number(my)+Number(my1));
