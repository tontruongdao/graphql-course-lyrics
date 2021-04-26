import React from 'react'
import { gql, useMutation } from '@apollo/client'

import { DELETE_SONG, SONGS } from './gqlHelpers'

const Song = ({ title, id }) => {


  const [song, { data }] = useMutation(DELETE_SONG)

  // console.log(id);
  const onClick = (id) => {
    song({ variables: { id: id }, refetchQueries: [{ query: SONGS }]});
  }

  return (
    <div>
      Song: {title}
      <div>{id}</div>
      <button
        onClick={() => onClick(id)}
      >
        X
      </button>
    </div>
  )
}

export default Song