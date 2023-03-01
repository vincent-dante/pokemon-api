<script setup>
import { usePokemonsStore } from '@/stores/pokemons'
const store = usePokemonsStore()

const formatString = (string) => {
  if (string === undefined) return
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const setDetailsId = (id) => (store.detailsId = id)
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:px-40">
    <button
      @click="setDetailsId(pokemon.id)"
      v-for="(pokemon, index) in store.pokemons"
      :key="index"
      :class="`text-center transition ease-in-out md:hover:-translate-y-3 duration-300 ${
        store.pokemons.length === 1 ? 'md:col-start-2' : ''
      } w-full type-${pokemon?.types[0]}`"
    >
      <div class="bg-white gradient-background p-5 rounded-2xl shadow-md overflow-hidden">
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
          srcset=""
          width="200"
          height="200"
          class="mx-auto"
        />
        <p class="pokemon-name">{{ formatString(pokemon.name) }}</p>
        <div class="flex gap-2 justify-center pt-5 text-sm">
          <span
            v-for="(type, index) in pokemon.types"
            :key="index"
            class="py-1 px-3 pokemon-type rounded-full"
          >
            {{ formatString(type) }}
          </span>
        </div>
      </div>
    </button>
  </div>
  <p v-if="!store.pokemons.length" class="text-center">No Pokemon found.</p>
</template>
