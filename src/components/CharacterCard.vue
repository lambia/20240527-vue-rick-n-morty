<script>
export default {
    name: "CharacterCard",
    props: {
        character: String
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>

    <div class="card">
        <img :src="character.image">
        <h4>{{ character.name }}</h4>
        <p>Specie: {{ character.species }}</p>
        <p>Stato: {{ character.status }}</p>
        <p>Origine: {{ character.origin.name }}</p>
        <p>Ultima posizione nota: {{ character.location.name }}</p>
    </div class="card">

</template>

<style scoped>
div.card {
    padding: 1rem;
    width: 25%;
}

div.card>img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
}
</style>