import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './config/particles.json';

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const [config, setConfig] = useState(particlesConfig);

    useEffect(() => {
        // Initialize particles engine
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        // Detect touch devices and update particles config
        const isTouchDevice =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
            const updatedConfig = { ...particlesConfig };
            updatedConfig.interactivity.events.onHover.enable = false; // Disable hover for touch devices
            setConfig(updatedConfig);
        } else {
            setConfig(particlesConfig); // Keep default config for non-touch devices
        }
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
