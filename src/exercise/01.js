// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting() {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const array = React.useState('')
  const name = array[0]
  const setName= array[1]

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
  setName(event.target.value) 
    
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
