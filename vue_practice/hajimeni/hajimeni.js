new Vue({
  el:'#app',
  data:{
    message:'hello Vue.js',
    seen:true,
    todos:[
      {text:'hogehoge'},
      {text:'hogehoge'},
      {text:'hogehoge'},
      {text:'hogehoge'},
      {text:'hogehoge'},
    ]
    },
    methods:{
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})
