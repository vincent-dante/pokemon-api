import { ref, computed, inject } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonsStore = defineStore('pokemon', () => {
  const axios = inject('axios')

  const pokemons = ref([])
  const searchPokemon = ref('')
  const detailsId = ref(0)
  const loading = ref(false)

  const getPokemons = computed(() => pokemons.value)

  const fetchSearchPokemon = async () => {
    try {
      loading.value = true
      const search = searchPokemon.value.toLocaleLowerCase()
      const result = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((result) => {
          return [
            {
              name: result?.data?.name,
              image: result?.data?.sprites?.front_default,
              types: result?.data?.types?.map((type) => type.type.name),
              id: result?.data?.id,
              stats: result?.data?.stats?.map((stats) => {
                return {
                  name: stats.stat.name,
                  value: stats.base_stat
                }
              }),
              abilities: result?.data?.abilities?.map((ability) => ability.ability.name),
              base_experience: result?.data?.base_experience,
              height: result?.data?.height,
              weight: result?.data?.weight
            }
          ]
        })
      pokemons.value = result
      detailsId.value = 0
      loading.value = false
    } catch (error) {
      if (error.response.status === 404) {
        pokemons.value = []
        loading.value = false
      }
    }
  }

  const fetch3Pokemons = async () => {
    try {
      loading.value = true
      const getCharmander = await axios.get(`https://pokeapi.co/api/v2/pokemon/4`)
      const getPikachu = await axios.get(`https://pokeapi.co/api/v2/pokemon/25`)
      const getBulbasaur = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)

      const result = await Promise.all([getCharmander, getPikachu, getBulbasaur]).then(
        (results) => {
          return results.map((result) => ({
            name: result?.data?.name,
            image: result?.data?.sprites?.front_default,
            types: result?.data?.types?.map((type) => type.type.name),
            id: result?.data?.id,
            stats: result?.data?.stats?.map((stats) => {
              return {
                name: stats.stat.name,
                value: stats.base_stat
              }
            }),
            abilities: result?.data?.abilities?.map((ability) => ability.ability.name),
            base_experience: result?.data?.base_experience,
            height: result?.data?.height,
            weight: result?.data?.weight
          }))
        }
      )

      pokemons.value = result
      detailsId.value = 0
      loading.value = false
    } catch (error) {
      if (error.response.status === 404) {
        pokemons.value = []
        loading.value = false
      }
    }
  }

  return {
    pokemons,
    searchPokemon,
    detailsId,
    loading,
    getPokemons,
    fetch3Pokemons,
    fetchSearchPokemon
  }
})
