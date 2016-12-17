Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

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
    ],
    groceryList: [
    { text: 'Vegetables' },
    { text: 'Cheese' },
    { text: 'Whatever else humans are supposed to eat' }
  ]
    },
    methods:{
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})
