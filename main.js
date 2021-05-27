const app = new Vue ({
    el: '#app',
    data: {
        title: "Users Email",
        emails: []
    },
    methods:{

    },
    mounted (){
        for (i=0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            // console.log(response.data.response);
            this.emails.push(response.data.response);
            console.log(this.emails);
          
        })
        }
        
    }
})