import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <ParticlesBackground />
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
