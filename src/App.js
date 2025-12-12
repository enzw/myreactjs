import { CounterCard } from "./components/CounterCard";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <CounterCard title={"Counter Enzo"} start={9} />
      <CounterCard title={"Default Props"} />
    </div>
  )
}

export default App