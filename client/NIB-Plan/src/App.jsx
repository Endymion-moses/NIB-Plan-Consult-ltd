import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0f172a" : "#ffffff");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} onThemeToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </div>
  )
}

export default App
