import React, { useState } from 'react'

const SongCreate = () => {

  const [title, setTitle] = useState("")
  console.log(`Current title is ${title}`)

  return (
    <div>
      <h3>Create A New Song</h3>
      <form action="">
        <label>Song Title:</label>
        <input 
          onChange={e => setTitle(e.target.value)}
          value={title}/>
      </form>
    </div>
  )
}

export default SongCreate;