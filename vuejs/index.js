Vue.component('myComponent',{
    template: '<p>This is a component paragraph</p>'
})
var app = new Vue({
    el: "#paragraph",
    data: {
        message: "This is a first vue message",
          name: "Agu Michael Chiagoziem",
          temp: "0"
            
    },  
    methods: {
        inc: function(){
            this.temp++;
        },
        dec: function(){
            this.temp--;
        }
    }
});