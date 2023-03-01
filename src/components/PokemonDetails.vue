<script setup>
import { computed } from 'vue'

import { usePokemonsStore } from '@/stores/pokemons'
import WaveTop from './icons/WaveTop.vue'
import WaveBottom from './icons/WaveBottom.vue'

const store = usePokemonsStore()

const details = computed(() =>
  store.pokemons.find((pokemon) => {
    if (store.detailsId === 0) return
    return pokemon.id == store.detailsId
  })
)

const fillBackground = computed(() => 'type-' + details.value.types[0])
const formatString = (string) => {
  if (string === undefined) return
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const onClickBack = () => (store.detailsId = 0)
</script>

<template>
  <div
    v-if="details"
    class="bg-white mx-auto max-w-3xl rounded-2xl shadow-md relative overflow-hidden"
    :class="fillBackground"
  >
    <WaveTop />

    <div class="absolute flex w-full justify-between top-0 p-5">
      <button @click="onClickBack" class="back-button">
        <i class="bi bi-arrow-left"></i>
        <font-awesome-icon icon="fa-solid fa-angle-left" class="mr-2" /> Back
      </button>
      <span :class="`bg-white rounded-full text-xl px-2 text-type-${details.types[0]}-400`">
        #{{ details.id }}
      </span>
    </div>

    <img
      :src="details.image"
      :alt="details.name"
      srcset=""
      width="200"
      height="200"
      class="mx-auto"
    />

    <div class="p-5 text-center">
      <h1 class="text-3xl pb-5">{{ formatString(details.name) }}</h1>
      <div class="flex gap-2 justify-center pt-5 text-sm">
        <span
          v-for="(type, index) in details.types"
          :key="index"
          class="py-1 px-3 pokemon-type rounded-full"
        >
          {{ formatString(type) }}
        </span>
      </div>
      <div class="py-5">
        <span v-for="(ability, index) in details.abilities" :key="index" class="text-pink-500">
          <span v-if="index != 0"> | </span> {{ formatString(ability) }}
        </span>
        <p>Abilities</p>
      </div>
      <div class="grid grid-cols-3 gap-5 py-10">
        <div>
          <p class="text-4xl text-pink-500">{{ details.base_experience }}</p>
          <p>Base exp.</p>
        </div>
        <div>
          <p class="text-4xl text-pink-500">{{ details.height }}</p>
          <p>Height</p>
        </div>
        <div>
          <p class="text-4xl text-pink-500">{{ details.weight }}</p>
          <p>Weight</p>
        </div>
        <div v-for="(stat, index) in details.stats" :key="index" class="">
          <p class="text-4xl text-pink-500">{{ stat.value }}</p>
          <p>{{ formatString(stat.name) }}</p>
        </div>
      </div>
    </div>

    <WaveBottom />
  </div>
</template>
