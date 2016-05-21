new Vue({
   el: "#counter-app",
   data:{
      count: 0
   },
   methods:{
       incrementCount: function(){
           this.count += 1;
       },
       decrementCount: function(){
           if(this.count > 0){
           this.count -= 1;
           }
       }
   }
   
});