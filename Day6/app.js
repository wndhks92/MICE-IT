// api 에서 제공하는 데이터를  html 에 뿌려주는 소스
//html 에서는 for문을 사용하여 쿼리문으로 불러옴
//jsonp 가 api 에서 데이터를 가져오게됨

//https://developers.daum.net  다음 오픈api 주소

console.log('app.js');

var page = 1;
var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20160401&pageSize=20&page=1";

var wrap = document.getElementById('wrap');
var template = document.getElementById('movieListTemplate').innerHTML;

//var data=[
//  {
//    title:'이것은 제목입니다',
//    img: '',
//    starRating:3,
//    link:'http://daum.net'
//  }
//];

//var html = tmpl(template,{list:data});
//wrap.innerHTML=html;

function render(wrap, template, data){

  var html = tmpl(template, {list: data});
  wrap.innerHTML = html;
}



getJSON(apiurl, function(res){
  console.log(res);

  render( wrap, template, res.data);

});
