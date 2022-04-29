import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  const value = 0;
  return (
    <div className="main">
      <h1>"COUNTER APP"</h1>
      <Counter value={value} />
    </div>
  );
}

export default App;