import { api } from "../constants/api"

const PokemonServices = {
    getPokemons(url = '') {
        return api.get(`/pokemon/${url}`)
    },
    getPokemon(id = '') {
        return api.get(`/pokemon/${id}`)
    },
    getPokemonHabitat(id = '') {
        return api.get(`/pokemon-habitat/${id}`)
    },
    getPokemonShape(id = '') {
        return api.get(`/pokemon-shape/${id}`)
    }
}

export default PokemonServices