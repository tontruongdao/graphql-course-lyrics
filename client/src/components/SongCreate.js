import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useHistory } from "react-router-dom";

import { SONGS } from './gqlHelpers'

const SongCreate = () => {
  
  let history = useHistory();

  const [songtitle, setSongtitle] = useState("")
  let title;
  // console.log(`Current title is ${songtitle}`)
  
  const [songCreate, { data }] = useMutation(CREATE_SONG)
  let input;
  
  const onSubmit = (event) => {
    event.preventDefault();
    songCreate({ variables: { title: title.value }, refetchQueries: [{ query: SONGS }]});
    setSongtitle('')
    history.push('/')
  }
  
  return (
    <div>
      <h3>Create A New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title: </label>
        <input 
          onChange={e => setSongtitle(e.target.value)}
          value={songtitle}
          ref={value => {
            title = value
          }}/>
        <button type="submit">Add Song</button>
      </form>
    </div>
  )
}

const CREATE_SONG = gql`
mutation AddSong($title: String){
  addSong(title: $title) {
    id
    title
  }
}
`

export default SongCreate;