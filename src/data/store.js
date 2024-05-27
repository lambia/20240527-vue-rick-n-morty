import { reactive } from 'vue';

const iMieiDati = reactive({

    pianeta: "Terra C-137",

    personaggi: [
        //vuoto, i dati li inserisco al mounted di App.vue grazie ad axios
        {
            name: "Rick Sanchez",
            species: "Human",
            status: "Alive",
            origin: {
                name: "Earth (C-137)"
            },
            location: {
                name: "Ultima posizione nota: Citadel of Ricks"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            name: "Morty Smith",
            species: "Human",
            status: "Alive",
            origin: {
                name: "unknown"
            },
            location: {
                name: "Ultima posizione nota: Citadel of Ricks"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        },
        {
            name: "Summer Smith",
            species: "Human",
            status: "Alive",
            origin: {
                name: "Earth (Replacement Dimension)"
            },
            location: {
                name: "Ultima posizione nota: Earth (Replacement Dimension)"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        },
        {
            name: "Beth Smith",
            species: "Human",
            status: "Alive",
            origin: {
                name: "Earth (Replacement Dimension)"
            },
            location: {
                name: "Ultima posizione nota: Earth (Replacement Dimension)"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        }
    ]
});

export default iMieiDati;