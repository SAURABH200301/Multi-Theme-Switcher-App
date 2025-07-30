import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import LayoutWrapper from "./components/LayoutWrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <LayoutWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </LayoutWrapper>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
