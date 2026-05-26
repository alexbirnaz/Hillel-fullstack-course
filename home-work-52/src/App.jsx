import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./app/store";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AddLoadPage from "./pages/AddLoadPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddLoadPage />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
