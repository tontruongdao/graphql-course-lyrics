import React from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import { SONGS } from './gqlHelpers'

import Song from './Song'

const SongList = () => {
  const { loading, error, data } = useQuery(SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;

  // console.log(data)

  const songs = data.songs.map((song) => {
    return (
      <li key={song.title}>
        <Song
          title={song.title}
          id={song.id}
        />
      </li>
    )
  })

  return (
    <div>
      <ul>
        {songs}
      </ul>
    </div>
  );
}

export default SongList;