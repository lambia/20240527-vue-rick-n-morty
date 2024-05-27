<script>
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue';
import appLinks from './data/AppHeaderLinks.js';

export default {
  components: {
    AppHeader,
    CharacterList
  },
  data() {
    return {
      appTitle: "Rick 'n' Morty",
      appLinks // è syntax sugar di ---> appLinks: appLinks
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>
  <AppHeader :title="appTitle" :links="appLinks" background="#FF6600" />

  <main>
    <h1>Benvenuto in {{ appTitle }}</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt distinctio ipsum iure totam ullam maiores
      perspiciatis maxime! Accusantium ad tenetur architecto autem eos blanditiis nesciunt dolor, quaerat ut
      repudiandae.</p>
    <CharacterList />
  </main>

</template>

<style></style>