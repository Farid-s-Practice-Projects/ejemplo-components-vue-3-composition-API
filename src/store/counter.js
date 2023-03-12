import {defineStore} from 'pinia'
import {computed, ref} from 'vue'

//COMPOSITION API
export const useCounterStore = defineStore('counter', () =>{

    const count = ref(0)
    const increment = () => {
        return count.value++;
    }
    const double = computed(()=>{
        return count.value*2;
    })
    return{
        count,
        increment,
        double
    }
});

//API OPTIONS
/*
export const useCounterStore = defineStore('counter', {
    state:  () => ({
        count:0
    }),
    actions: {
        increment(){
            this.count++;
        }
    },
    getters: {
        double: (state) => state.count * 2
    }
});*/
