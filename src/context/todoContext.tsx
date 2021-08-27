import React, { createContext, useState } from "react";

type TodosContextState = {
  todos: string[];
  addTodo: (name: string) => void
};

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {}
}

const TodosContext  = createContext<TodosContextState>(contextDefaultValues);

const TodosProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo])

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
