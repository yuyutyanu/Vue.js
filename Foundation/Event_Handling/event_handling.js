var vm = new Vue({
          el:"#app",
          data:{
            message:"hogehoge",
            count:0
          },
          methods:{
            button:function(message,event){
              this.count+=1
              if (event) event.preventDefault()
              console.log(message)
            }
          }
        })
