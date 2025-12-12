import { CounterCard } from "./components/counterCard";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <CounterCard title={"Counter Enzo"} start={9} />
      <CounterCard title={"Default Props"} />
    </div>
  )
}

export default App