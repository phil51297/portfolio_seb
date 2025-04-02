import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './pages/About';
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <About />
        </>
    );
}

export default App;
