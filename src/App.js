import { CounterCard } from "./components/CounterCard";
import { TodoCard } from "./components/TodoCard";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <TodoCard title = {"Todo List Sederhana"}/>
      <CounterCard title={"Counter Enzo"} start={9} />
      <CounterCard title={"Default Props"} />
    </div>
  )
}

export default App