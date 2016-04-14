var jevent ={
  add: function(func){

    jsonEvent.callbak.push(func);
  },
  callback: [],
  fire:function(){

    for(var i=0;i<jsonEvent.callback.length; i++){
      jsonEvent.callback[i]();
    }

  }
};

jevent.add(function(){
console.log('loaded json daa!');


})
jevent.fire('loadedJson');
