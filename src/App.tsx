import { Container } from "@mui/system";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import ErrorPage from "./components/ErrorPage/ErrorPage";
import StartPage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
