<script>
export default {
  name: "AppHeader",
  props: {
    title: String,
    links: Array,
    background: String
  },
  data() {
    return {}
  },
  methods: {

  },
  mounted() {

  }
}
</script>


<template>

  <header :style="{ backgroundColor: background }">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="elemento in links">
        <a :href="elemento.link">
          {{ elemento.text }}
        </a>
      </li>
    </ul>
  </header>

</template>

<style scoped>
header {
  background-color: #444;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

li {
  display: inline;
  padding: 0 0.5rem;
}
</style>