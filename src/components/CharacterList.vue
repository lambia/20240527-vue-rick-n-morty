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

    }
}
</script>

<template>

    <h3>Ecco i personaggi che vivono su {{ store.pianeta }}</h3>
    <ul>
        <CharacterCard v-for="personaggio in store.personaggi" :character="personaggio" />
    </ul>

</template>

<style></style>