import { reactive } from 'vue';

const ilMioOggettone = {

    pianeta: "Terra C-137",

    personaggi: [
        //vuoto, i dati li inserisco al mounted di App.vue grazie ad axios
    ]
};

const iMieiDati = reactive(ilMioOggettone);

export default iMieiDati;