new Vue({
  el:'#app',
  data:{
    hoge:"hogehoge",
    message:"hugahuga"
  },
  filters: {
    capitalize: function (val) {
      if(val=="hugahuga"){console.log("hugahuga")}
    }
  },
  methods:{
    piyo:function(){
      alert("piyopiyo");
    }
  }
})
