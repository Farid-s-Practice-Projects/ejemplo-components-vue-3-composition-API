<script setup>
import {useCounterStore} from '@/store/counter.js'
import {storeToRefs} from 'pinia'

const useCounter = useCounterStore()

const {increment} = useCounter;
//con storeToRefs si nos deja utilizar count y double, ya que las variables reactivas no se puede desestructurar facilmente
const {count, double} = storeToRefs(useCounter);
</script>

<template>
  <h1>    Home  counter: {{count}}</h1>
  <h2> Double: {{double}}</h2>
  <button @click="increment" class="btn btn-outline-primary">Increment</button>
</template>
