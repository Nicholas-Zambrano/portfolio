import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import PythonPage from "./pages/PythonPage/PythonPage";
import CPage from "./pages/CPage/CPage";
import JavaPage from "./pages/JavaPage/JavaPage";
import JavaScript from "./pages/JavaScriptPage/JavaScriptPage";
import WebsitePage from "./pages/WebsitePage/WebsitePage";
import FullStackPage from "./pages/FullStackPage/FullStackPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ArduinoPage from "./pages/ArduinoPage/ArduinoPage";

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
          <Route path="/javaScript" element={<JavaScript />} />
          <Route path="/html-css-websites" element={<WebsitePage />} />
          <Route path="/full-stack" element={<FullStackPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-me" element={<ContactPage />} />
          <Route path="/arduino-project" element={<ArduinoPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
