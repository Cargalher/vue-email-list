const app = new Vue ({
    el: '#app',
    data: {
        title: "Users Email",
        usersEmail: ""
    },
    methods:{

    },
    mounted (){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            console.log(response.data.response);
        })
    }
})