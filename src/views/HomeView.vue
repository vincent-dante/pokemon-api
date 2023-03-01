<script setup>
import { onMounted } from 'vue'
import { usePokemonsStore } from '@/stores/pokemons'
import PokemonDetails from '../components/PokemonDetails.vue'
import PokemonList from '../components/PokemonList.vue'

const store = usePokemonsStore()

onMounted(() => {
  if (store.searchPokemon.length) {
    store.fetchSearchPokemon()
  } else {
    store.fetch3Pokemons()
  }
})
</script>

<template>
  <PokemonList v-if="!store.detailsId && !store.loading" />
  <PokemonDetails v-else-if="store.detailsId && !store.loading" />
  <img
    v-if="store.loading"
    src="../assets/pokeball-800x600.gif"
    alt="Pokeball loading"
    srcset=""
    width="500"
    height="500"
    class="mx-auto"
  />
</template>
