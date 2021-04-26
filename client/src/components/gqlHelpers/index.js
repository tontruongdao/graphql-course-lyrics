import { gql } from '@apollo/client'

export const SONGS = gql`
  query {
    songs {
      title
      id
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

export const DELETE_SONG = gql`
  mutation DeleteSong ($id: ID) {
    deleteSong(id: $id){
      id
    }
  }
`