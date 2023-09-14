import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import PythonPage from "./pages/PythonPage/PythonPage";
import CPage from "./pages/CPage/CPage";
import JavaPage from "./pages/JavaPage/JavaPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/c" element={<CPage />} />
          <Route path="/java" element={<JavaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
