<script setup>
import { ref } from 'vue'
import { usePokemonsStore } from '@/stores/pokemons'

const store = usePokemonsStore()
const search = ref('')

const searchPokemon = () => {
  store.searchPokemon = search.value

  if (search.value) {
    store.fetchSearchPokemon()
  } else {
    store.fetch3Pokemons()
  }
}
</script>

<template>
  <div class="border rounded-full overflow-hidden flex w-full md:w-2/3 lg:w-1/2 mx-auto">
    <input
      type="text"
      class="px-5 py-3 w-2/3 text-gray-600 focus:outline-transparent"
      placeholder="Search by complete name or id"
      v-model="search"
      @keyup.enter="searchPokemon"
    />
    <button
      type="button"
      class="px-5 bg-slate-700 hover:bg-slate-800 text-white w-1/3"
      @click="searchPokemon"
    >
      Search
    </button>
  </div>
</template>

<style lang="scss"></style>
