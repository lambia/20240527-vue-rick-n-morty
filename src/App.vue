<script>
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue';
import appLinks from './data/AppHeaderLinks.js';
import store from './data/store.js';

export default {
  components: {
    AppHeader,
    CharacterList
  },
  data() {
    return {
      appTitle: "Rick 'n' Morty",
      appLinks, // è syntax sugar di ---> appLinks: appLinksl
      store
    }
  },
  methods: {

  },
  created() {
    axios.get("https://rickandmortyapi.com/api/character").then(risultato => {
      this.store.personaggi = risultato.data.results;
    });
  },
  mounted() {

  }
}
</script>

<template>
  <AppHeader :title="appTitle" :links="appLinks" background="#FF6600" />

  <main>
    <section id="intro">
      <h1>Benvenuto in {{ appTitle }}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt distinctio ipsum iure totam ullam
        maiores
        perspiciatis maxime! Accusantium ad tenetur architecto autem eos blanditiis nesciunt dolor, quaerat ut
        repudiandae.</p>
    </section>

    <CharacterList />
  </main>

</template>

<style scoped>
main {
  padding: 1rem
}

section#intro {
  margin: 1rem 0;
}
</style>