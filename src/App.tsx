import React from 'react'
//components
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
//stylesheets
import './stylesheets/general-style.scss';
import './stylesheets/responsive.scss';

export default function App() {
  return (
    <>
      <Landing/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  );
}