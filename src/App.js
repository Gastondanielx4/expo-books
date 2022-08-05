import { HashRouter, Routes, Route } from "react-router-dom";
import { MainBooks } from "./components/MainBooks";
import { CrudProvider } from "./context/CrudContext";
import { FormCrudPage } from "./pages/FormCrudPage";
import { OneBookPage } from "./pages/OneBookPage";

function App() {
  return (
    <div className="app">
      <header>
        <h2>Expo-books</h2>
      </header>
      <CrudProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainBooks />} />
            <Route path=":id" element={<OneBookPage />} />
            <Route path="/edit" element={<FormCrudPage />} />
          </Routes>
        </HashRouter>
      </CrudProvider>
    </div>
  );
}

export default App;
