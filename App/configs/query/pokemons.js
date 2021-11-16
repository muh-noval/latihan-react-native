import { gql } from '@apollo/client';

const GET_Pokemons = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
    }
  }
`;

export default GET_Pokemons;