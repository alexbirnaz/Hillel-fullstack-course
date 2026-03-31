import StatelessComponent from "./components/StatelessComponent";
import StatefulComponent from "./components/StatefulComponent";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Components</h1>

      <section>
        <h2>Stateless Component</h2>
        <StatelessComponent
          title="Welcome"
          description="This component just displays props"
        />
        <StatelessComponent
          title="About"
          description="No state here, only props"
        />
      </section>

      <section>
        <h2>Stateful Component</h2>
        <StatefulComponent initialCount={0} step={1} />
        <StatefulComponent initialCount={10} step={5} />
      </section>
    </div>
  );
}

export default App;
