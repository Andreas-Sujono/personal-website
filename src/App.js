import React from 'react';
import Front from './components/front.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Skills from './components/skills.js'
import Footer from './components/footer.js'

function App() {
  return (
    <div style={{height:'100%'}}>
      <Front />
      <About />
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
