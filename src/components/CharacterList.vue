<script>
import CharacterCard from './CharacterCard.vue';
import store from '../data/store.js';

export default {
    name: "CharacterList",
    components: {
        CharacterCard
    },
    props: {},
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {
        // console.log("store diretto", store);
        // console.log("store dal data", this.store);

    }
}
</script>

<template>

    <h3>Ecco i personaggi che vivono su {{ store.pianeta }}</h3>
    <div id="cardContainer">
        <CharacterCard v-for="personaggio in store.personaggi" :character="personaggio" />
    </div>

</template>

<style scoped>
div#cardContainer {
    display: flex;
    flex-wrap: wrap;
}
</style>