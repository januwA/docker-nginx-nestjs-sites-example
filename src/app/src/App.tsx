import React, { ChangeEvent, useState } from 'react'

function App() {
  const [todo, settodo] = useState('')

  const addtodo = async () => {
    await fetch('/api/todos', {
      method: "POST",
      body: JSON.stringify({
        data: todo
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    settodo('')
  }

  return (
    <div className="App">
      add todo: <input type="text" value={todo} onChange={(e) => settodo(e.target.value)} />
      <button onClick={addtodo}>add</button>
    </div>
  )
}

export default App
