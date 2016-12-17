vm = new Vue({
  el:'#app',
  data:{
    message:"hoge",
    firstName:"piyo",
    lastName:"piyo"
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      return this.message.split('').reverse().join('') // `this` は vm インスタンスを指します
    },
    fullName: {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
       // setter 関数
       set: function (newValue) {
         var names = newValue.split(' ')
         this.firstName = names[0]
         this.lastName = names[names.length - 1]
       }
     },
    a_now:function(){
      return Date.now() //リアクティブな依存ではないので一度実行されたらキャッシュされて何度実行しても同じ結果が帰ってくる
    }
  },
  methods:{
    b_now:function(){
      return Date.now()  //キャッシュされないため毎回違う値が帰ってくる
    }
  }
})

console.log(vm.reversedMessage)
vm.fullName = "vue tarou"//setter関数呼び出し
