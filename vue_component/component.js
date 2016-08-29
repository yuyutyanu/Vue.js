var nav = Vue.extend({
    template: '<ul class="nav"><li>nav1</li><li>nav2</li><li>nav3</li></ul>'
});
var footer = Vue.extend({
    template: '<p>footer</p>'
});
var inputform = Vue.extend({
    template: '<input @keyup.enter="getvalue($event)">',
    methods: {
        getvalue: function(event) {
          console.log(event);
          alert('chanudesu');
        }
    }
});

Vue.component('vue-nav', nav);
Vue.component('vue-footer', footer);
Vue.component('vue-form', inputform);

document.addEventListener("DOMContentLoaded", function() {
    new Vue({
        el: '#nav'
    });

    new Vue({
        el: '#inputform'
    });

    new Vue({
        el: '#main-content',
        data: {
            todos: [{
                text: 'testtext'
            }, {
                text: 'testtext'
            }, {
                text: 'testtext'
            }, {
                text: 'testtext'
            }, {
                text: 'testtext'
            }]
        }
    });
    new Vue({
        el: '#footer'
    });
});
