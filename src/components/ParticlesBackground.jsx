import { useEffect, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './config/particles.json';

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const [config, setConfig] = useState(particlesConfig);
    const isSmallScreen = useRef(window.innerWidth <= 768);

    useEffect(() => {
        // Initialize particles engine
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        // Update particles config based on screen size
        const updateConfig = () => {
            const isNowSmallScreen = window.innerWidth <= 768;

            // Only update if the screen size crosses the threshold
            if (isNowSmallScreen !== isSmallScreen.current) {
                isSmallScreen.current = isNowSmallScreen;

                const updatedConfig = { ...particlesConfig };
                updatedConfig.interactivity.events.onHover.enable =
                    !isNowSmallScreen;
                setConfig(updatedConfig);
            }
        };

        // Add event listener for screen resize
        window.addEventListener('resize', updateConfig);

        return () => {
            window.removeEventListener('resize', updateConfig);
        };
    }, []);

    const particlesLoaded = (container) => {
        console.log('Particles container loaded:', container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={config}
                particlesLoaded={particlesLoaded}
            />
        );
    }

    return null;
};
