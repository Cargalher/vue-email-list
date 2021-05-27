const app = new Vue ({
    el: '#app',
    data: {
        title: "Users Email",
        emails: []
    },
    methods:{

    },
    mounted (){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            // console.log(response.data.response);
            this.emails = response.data.response;
            console.log(this.emails);
          
        })
    }
})