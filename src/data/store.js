import { reactive } from 'vue';

const iMieiDati = reactive({
    personaggi: [
        //vuoto, i dati li inserisco al mounted di App.vue grazie ad axios
    ],
    pianeta: "Terra C-137"
});

export default iMieiDati;