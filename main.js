const app = new Vue ({
    el: '#app',
    data: {
        title: "Users Email",
        emails: [
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
            { emailUser: '' },
        ]
    },
    methods:{

    },
    mounted (){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            console.log(response.data.response);
            this.emailUser = response.data.response
        })
    }
})