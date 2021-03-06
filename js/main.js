import { fetchdata } from "./components/TheDataMiner.js";
(() => {
    // Define a new component called prof-card
    Vue.component("prof-card",{
        props:["prof"],
        template:
        ` <li>
            <img :src=" 'images/' + prof.avatar" :alt='prof.name +  " image"'>
            <p> Prof Name: {{ prof.name }}</p>
            <a href="" class="remove-prof">Show {{ prof.name }}'s info</a>
            <a href="" class="remove-prof">Remove {{prof.name }}</a>
           </li>`,
        created:function(){
            console.log(`created ${this.prof.name} card`);
        }
    });

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,
    
             professors:[],
             currentProfData:{}
            // professors: [
            //     { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
            //     { name: "John", role: "prof", nickname: "super chill" },
            //     { name: "Joe", role: "prof", nickname: "Teddy Bear" },
            // ]
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted!Try a fetch for the initial data");
            // alert("Hey there! your vue instance is ready");
            // this.professors.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"} )
            // alert("you added Jarrod!")

            //fetch call users in database       
            // fetchdata("./includes/index.php").then(data=>this.professors = data).catch(err=>console.error(err));
            fetchdata("./includes/index.php")
            .then(data=>{
                data.forEach(prof=>this.professors.push(prof))
            })
                .catch(err=>console.error(err));
        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            showProfData(target) {
                // remove this prof from the professors array
                console.log('clicked to view prof bio data', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true
                //make the selected prof's data visible
                this.currentProfData = target;
            },

            removeProf(target) {
                // remove this prof from the professors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                //make the selected prof's data visible
                //indexOf find which line you wnat to delete,just one line
                // this.professors.splice(this.professors.indexOf(target),1);
                this.$delete(this.professors,target);
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();