import { HashRouter, Routes, Route } from "react-router-dom";
import { MainBooks } from "./components/MainBooks";
import AuthProvider from "./context/AuthContext";
import { CrudProvider } from "./context/CrudContext";
import { FormCrudPage } from "./pages/FormCrudPage";
import LoginPage from "./pages/LoginPage";
import { OneBookPage } from "./pages/OneBookPage";

function App() {
  return (
    <div className="app">
      <header>
        <h2>Expo-books</h2>
      </header>
      <CrudProvider>
        <AuthProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<MainBooks />} />
              <Route path=":id" element={<OneBookPage />} />
              <Route path="/edit" element={<FormCrudPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </HashRouter>
        </AuthProvider>
      </CrudProvider>
    </div>
  );
}

export default App;
