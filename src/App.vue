<script setup>
import {onMounted, ref} from 'vue';

  import BlogPost from "./components/BlogPost.vue";
  import PaginatePost from "./components/PaginatePost.vue";
  import LoadingSpinner from "@/components/LoadingSpinner.vue";

  const posts= ref([]);

  const postXPagina = 10;
  const inicio = ref(0);
  const fin = ref(  postXPagina);

  const loading =ref(true);

  const favorito = ref("");
  const cambiarFavorito = (title) =>{
    favorito.value=title;
  }

  const next = () =>{
    inicio.value = inicio.value + postXPagina;
    fin.value = fin.value + postXPagina;
  }
  const previous = () =>{
   /* inicio.value -= postXPagina;
    fin.value -= postXPagina;*/

    inicio.value = inicio.value - postXPagina;
    fin.value = fin.value - postXPagina;
  }

  /*onMounted(async() => {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      posts.value = await res.json();
    }catch(error){
      console.log(error)
    }finally{
      setTimeout(() => {
        loading.value=false;
      }, 1000)
    }
  });*/

  /*fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        posts.value = data
      })
      .catch(() => console.log(e))
      .finally(() => {
        setTimeout(() => {
          loading.value=false;
        }, 1000)
      });*/

  const fetchData =async() => {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      posts.value = await res.json();
    }catch(error){
      console.log(error)
    }finally{
      setTimeout(() => {
        loading.value=false;
      }, 1000)
    }
  };
  fetchData();
</script>

<template>

  <LoadingSpinner v-if="loading"></LoadingSpinner>
  <div class="container" v-else>
    <h1>APP</h1>
    <h2>Mi post favorito es: {{favorito}}</h2>

    <PaginatePost class="mb-2" @nextName="next" @previousName="previous" :inicio="inicio" :fin="fin" :maxlength="posts.length"></PaginatePost>

    <BlogPost v-for="post in posts.slice(inicio, fin)" :key="post.id" class="mb-4" :id="post.id" :title="post.title" :body="post.body"
    @cambiarFavoritoNombre="cambiarFavorito"
    ></BlogPost>

  </div>

</template>

<style>

</style>