<script>
import CharacterCard from './CharacterCard.vue';

export default {
    name: "CharacterList",
    components: {
        CharacterCard
    },
    props: {},
    data() {
        return {
            personaggi: [
                "Rick",
                "Morty",
                "Evil Morty",
                "Gerry"
            ]
        }
    },
    methods: {

    }
}
</script>

<template>

    <h3>Personaggi:</h3>
    <ul>
        <CharacterCard v-for="personaggio in personaggi" :character="personaggio" />
    </ul>

</template>

<style></style>