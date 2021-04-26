import { gql } from '@apollo/client'

export const SONGS = gql`
  query {
    songs {
      title
    }
  }
`;

export const CREATE_SONG = gql`
mutation AddSong($title: String!){
  addSong(title: $title) {
    id
    title
  }
}
`