import React from 'react'
//stylesheets
import './stylesheets/general-style.scss';
import './stylesheets/responsive.scss';
//components
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

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