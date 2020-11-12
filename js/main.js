//this is a varation on our module theme
(()=>{
     let vue_vm=new Vue({
         //link Vue to an elemment in our HTML
         //el:"#app",

         data:{
             message:"Hello from Vue!", //VUe have data can access
             anotherMessage:"more text,so simple! much winning",

             profs:[
                 {name:"Justin", role:"coordinator", nickname:"nitsuJ"},
                 {name:"John", role:"prof", nickname:"super chill"},
                 {name:"Joe", role:"prof", nickname:"Teddy Bear"}     
                   ]
              },

              methods:{
                  logClicked(){
                      console.log("clicked on a prof name");
                  },
                  clickHeader(){
                      console.log("clicked on a Header");
                  }
              }  

     }).$mount("#app");//work like el:"#app", also connects Vue to your warpper in HTML

    })();