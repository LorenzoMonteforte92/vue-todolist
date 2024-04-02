

const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    text: 'Fare la spesa',
                    done: true,
                }, 
                {
                    text: 'Andare a correre',
                    done: true,
                }, 
            ]
           
        };
    },
    methods: {
       
    }
}).mount('#app');