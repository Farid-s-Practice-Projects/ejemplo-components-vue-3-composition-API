import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([])

    if(localStorage.getItem('favorites')){
        favorites.value = JSON.parse(localStorage.getItem('favorites'));
    }

    const addPoke = (pokemon) =>{
        favorites.value.push(pokemon);
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
        //alert("Haz añadido al pokemon exitosamente")
    }

    const deletePoke = (id) =>{
        favorites.value = favorites.value.filter(item => item.id !== id  ) ;
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }

    const findPoke = (name) => favorites.value.find(item => item.name === name )

    return{
        favorites,
        addPoke,
        deletePoke,
        findPoke
    }
})