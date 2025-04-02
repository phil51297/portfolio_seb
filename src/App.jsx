import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <About />
            <Skills />
        </>
    );
}

export default App;
