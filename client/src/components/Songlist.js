import React from 'react'
import { useQuery, gql } from '@apollo/client'

const SONGS = gql`
  query {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)

  const songs = data.songs.map((song) => {
    return (
      <li key={song.title}>{song.title}</li>
    )
  })

  return (
    <div>
      <p>
        {songs}
      </p>
    </div>
  );
}

export default SongList;