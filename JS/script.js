// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": 
//cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che viene aggiunto alla lista esistente.
//aggiungo v-model all'imput
//creo una variabile vuota in data che corrisponderà all'imput dellutente
//al click parte la funzione che prende il contenuto della variabile e lo unshifta in toDo

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// al click sullo span cambia il valore di .done in true e viene aiiunta la classe line through
const { createApp } = Vue;

createApp({
    data() {
        return {
            toDo: [
                {
                    text: 'Fare la spesa',
                    done: false,
                }, 
                {
                    text: 'Preparare schiscetta',
                    done: false,
                },
                {
                    text: 'Andare al mare',
                    done: false,
                }, 
                {
                    text: 'Pulire casa',
                    done: false,
                },  
            ],

        newTask: {
            text: '',
            done: false,
        },

        errorOccurred: false
           
        };
    },
    methods: {

        removeListItem(clickedIndex){
            this.toDo.splice(clickedIndex, 1)
        },

        addNewTask (){
            if(this.newTask.text.length >= 5){
                this.toDo.unshift(this.newTask);
                this.newTask = {
                    text: '',
                    done: false,
                }
                this.errorOccurred = false
            }else{
                this.errorOccurred = true
            }         
},

        textStrikeThrough (clickedIndex){
            this.toDo[clickedIndex].done = !this.toDo[clickedIndex].done
            
        },
       
    }
}).mount('#app');