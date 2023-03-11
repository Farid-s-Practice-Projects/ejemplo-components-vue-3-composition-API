<template>
  <p v-if="loading">Cargando información...</p>
  <div class="alert alert-danger mt-2" v-if="error">{{error}}</div>
  <div v-if="data" >
    <img :src="data.sprites?.front_default" alt="img del poke">
    <h1>Poke name: {{$route.params.namePoke}}</h1>
  </div>
  <button @click="back" class="btn btn-outline-primary">Back</button>

</template>


<script setup>
  import {useRoute, useRouter} from 'vue-router'
  import {useGetData} from "@/composables/getData";

  const route= useRoute();
  const router = useRouter();

  const {getData, loading, data, error}  = useGetData();

  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.namePoke}`);

  const back = () => {
    router.push('/pokemons')
  }

</script>

<style scoped>

</style>