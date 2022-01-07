import { Card } from "./components/Card";
import { StaticCard } from "./components/StaticCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>Designer Card</h4>

      <Card />

      <hr />
      <h4>Static Card</h4>
      <StaticCard />
    </div>
  );
}
