import { useState, ChangeEvent, FormEvent } from 'react';

import { api } from '../../services/api';

import { Container, Form, SearchPoke, PokeName } from './styles'

  interface Sprites {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: any;
  }

  interface Type2 {
    name: string;
    url: string;
  }

  interface Type {
    slot: number;
    type: Type2;
  }

  interface PokemonProps {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    sprites: Sprites;
    types: Type[];
    game_indices: number[]
  }


export const Home = () => {
  const [pokemon, setPokemon] = useState('')
  const [pokemonData, setPokemonData] = useState<PokemonProps[]>([])
  const [pokemonType, setPokemonType] = useState('')

  async function getPokemon() {
    const PokemonArray = []

    try {
      const pokemonRespAPI = await api.get<PokemonProps>(`/pokemon/${pokemon}/`)

      PokemonArray.push(pokemonRespAPI.data)
      setPokemonType(pokemonRespAPI.data.types[0].type.name)
      setPokemonData(PokemonArray)

      setPokemon('')
    } catch (err) {
      console.error(err)
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemon(e.target.value.toLocaleLowerCase())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getPokemon()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>
          <input
            value={pokemon}
            type="text"
            placeholder="Enter Pokemon Name"
            onChange={handleChange}
          />
        </label>
      </Form>

      {pokemonData.map((poke) => {
        return (
          <SearchPoke key={poke.id}>
            <div>
              <PokeName>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</PokeName>
              <img src={poke.sprites['front_default']} alt="" />
            </div>

              <div>
                <section>
                  <div>Type</div>
                  <div>{pokemonType}</div>
                </section>
                <section>
                  <div>Height</div>
                  <div>{Math.round(poke.height * 3.9)}</div>
                </section>
                <section>
                  <div>Weight</div>
                  <div>{Math.round(poke.weight / 4.3)} lbs</div>
                </section>

              </div>
          </SearchPoke>
        )
      })}
    </Container>
  )
}
