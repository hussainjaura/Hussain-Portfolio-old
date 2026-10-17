import Background from './components/Background.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Different from './components/Different.jsx'
import Achievements from './components/Achievements.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
  useReveal()

  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Different />
        <Achievements />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
