var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
//ajax动态获取数据加载列表
$.ajax({
	type:"get",
	url:"getvideo.json",
	async:true,
	success:function(data){
		vuedemo(data);
	}
});	
function vuedemo(data){
	var app4 = new Vue({
	  el: '#app-4',
	  data: {
	   todos:data
	  },
	  methods:{
			add:function(){
				this.todos.push({ 'name': 'New name' ,'src': 'New item'})
			}	  	
	  }
	})
}
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
