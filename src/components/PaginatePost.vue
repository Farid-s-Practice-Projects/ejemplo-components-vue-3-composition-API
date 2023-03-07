<script setup>
  defineProps(['inicio', 'fin', 'maxlength'])

  const emit = defineEmits(['nextName', 'previousName'])
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="emit('previousName')" type="button" class="btn btn-outline-primary" :disabled="inicio===0">Previous {{inicio}}</button>
    <button @click="emit('nextName')" type="button" class="btn btn-outline-primary" :disabled="fin===maxlength">Next {{fin}}</button>
  </div>
</template>