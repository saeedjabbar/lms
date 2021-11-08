import React from "react"
import TodoItem from "./components/TodoItem"

function App() {
  return (
    <div className="container card mt-5 pt-3">
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}

export default App