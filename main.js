const app = new Vue ({
    el: '#app',
    data: {
        title: "Users Email",
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emails: []
    },
    methods:{

    },
    mounted (){
        for (i=0; i<10; i++){
            axios.get(this.url)
        .then(response =>{
            // console.log(response.data.response);
            this.emails.push(response.data.response);
            console.log(this.emails);
          
        })
        }
        
    }
})