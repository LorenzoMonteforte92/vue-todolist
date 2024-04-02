

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDo: [
                {
                    text: 'Fare la spesa',
                    done: true,
                }, 
                {
                    text: 'preparare schiscetta',
                    done: true,
                },
                {
                    text: 'Andare al mare',
                    done: true,
                }, 
                {
                    text: 'Pulire casa',
                    done: true,
                },  
            ]
           
        };
    },
    methods: {
       
    }
}).mount('#app');