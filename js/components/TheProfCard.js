export default{//like public
        // Define a new component called prof-card
        name:"TheProfCard",
        props:["prof"],
         
        //data need to be a function inside a components
        data:function(){
            return{
                myName:this.prof.name,
                myRole:this.prof.role,
                program: "IDP"
            }
        },

        template:
        ` <li @click="logClicked">
            <img :src=" 'images/' + prof.avatar" :alt='prof.name +  " image"'>
            <p> Prof Name:  {{ prof.name }}</p>
            <a href="" class="remove-prof">Show {{ prof.name }}'s info</a>
            <a href="" class="remove-prof">Remove {{prof.name }}</a>
           </li>`,

        created:function(){
            console.log(`created ${this.prof.name} card`);
        },

        methods:{
            logClicked(){
                console.log(`fired from inside ${this.prof.name}'s the components`);
            }
        }

    }