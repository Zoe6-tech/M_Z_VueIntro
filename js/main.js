//this is a varation on our module theme
(()=>{
     let vue_vm=new Vue({//create new Vue app
         //link Vue to an elemment in our HTML
         //el:"#app",

         data:{
             message:"Hello from Vue!", //VUe have data can access
             anotherMessage:"more text,so simple! much winning",
             removeAformat:true,
             showBioData:false,

             professors:[
                 {name:"Justin", role:"coordinator", nickname:"nitsuJ"},
                 {name:"John", role:"prof", nickname:"super chill"},
                 {name:"Joe", role:"prof", nickname:"Teddy Bear"}
                   ]
              },

              //mounted lifecycle hook, vue is done creating itself, and has attached itself to the "app" div on the page
              mounted:function(){
                  console.log("vue is mounted!");
                  //alert("Hi there! you vue instance is ready, add Jarrod");

                  this.professors.push( {name:"Jarrod", role:"supermodel prof", nickname:"Zoolander"})
                  //go find this professors, push new item on it
                  //alert("Jarrod added successful!");
                  //fetchData("include//..");
                },

                ///run a method when we change our view(updata the DOM with Vue)
                updated:function(){
                    console.log("Vue just updated the DOM");//documents  obeject model 
                },


              methods:{
                  logClicked(){
                      console.log("clicked on a list item");
                  },
                  clickHeader(){
                      console.log("clicked on a Header");
                  },
                  removeProf(target){
                      //remove this prof from the professors array
                      console.log('clicked to remove prof',target, target.name);
                      //this keyword inside a vue instance refers to the vue instance itself by default
                      //toogle the property between true and false using a ternary statement
                      this.showBioData=this.showBioData ? false:true  //if true make it false,if false make it true
                  }
                }
     }).$mount("#app");//work like el:"#app", also connects Vue to your warpper in HTML

    })();