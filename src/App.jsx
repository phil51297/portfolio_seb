import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';
import ScrollReveal from 'scrollreveal';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sr = ScrollReveal({
            duration: 1000,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true,
            mobile: true,
            viewFactor: 0.1,
        });

        sr.reveal('section > div', {
            origin: 'bottom',
            distance: '20px',
            interval: 200,
        });

        sr.reveal('.from-top', {
            origin: 'top',
            distance: '20px',
        });

        sr.reveal('h2, h1', {
            delay: 100,
            distance: '10px',
            origin: 'top',
        });

        return () => sr.destroy();
    }, []);

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
