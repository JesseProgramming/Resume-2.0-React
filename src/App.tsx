import React from 'react'
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScriptHooks from './components/ScriptHooks';
function App() {
  return (
    <>
      <HomePage/>
      <Projects/>
      <Skills/>
      <Contact/>
      ScriptHooks("../components/script.js");
    </>
  );
}

export default App;