import { Suspense } from "react";
import MessageComponent from "./components/MessageComponent";
import "./App.css";

function fetchMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from server! This message was loaded with use() hook.");
    }, 2000);
  });
}

const messagePromise = fetchMessage();

function App() {
  return (
    <div className="app">
      <h1>React use() Hook</h1>
      <Suspense fallback={<p>Loading message...</p>}>
        <MessageComponent messagePromise={messagePromise} />
      </Suspense>
    </div>
  );
}

export default App;
