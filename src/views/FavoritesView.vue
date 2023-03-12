<template>
  <h1>Favoritos</h1>
  <p v-if="favorites.length===0">No existen favorites</p>
  <ul class="list-group" v-else>
    <li class="list-group-item" v-for="poke in favorites" :key="poke.id">
      <div>
        {{poke.name}}
      </div>
      <div>
        <button class="btn btn-outline-danger me-2" @click="deletePoke(poke.id)">Delete</button>
        <RouterLink class="btn btn-outline-success" :to="`/pokemons/${poke.name}`">More Information</RouterLink>
      </div>
    </li>
  </ul>
</template>

<script setup>
import {useFavoritesStore} from '@/store/favorites'
import {storeToRefs} from "pinia";
import {RouterLink} from 'vue-router'

const useFavorites = useFavoritesStore();

const {deletePoke} =useFavorites;

const {favorites} = storeToRefs(useFavorites)
</script>
