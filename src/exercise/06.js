// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [input, setInput] = React.useState('')
  const inputRef = React.useRef(null)

  const handleSubmit = (e) => {
    const input = inputRef.current.value
    onSubmitUsername(input)
    e.preventDefault()
  }

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase())
  }

  return (
    <form  
      onSubmit={handleSubmit} 
    >
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          id="username" 
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={input}
        />
      </div>
      <button type="submit"
      >
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
