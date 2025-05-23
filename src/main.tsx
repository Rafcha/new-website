import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import Skills from './mod/Skills.tsx';
import Projects from './mod/Projects.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>,
)
