import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './config/particles.json';

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log('Particles container loaded:', container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={particlesConfig}
                particlesLoaded={particlesLoaded}
            />
        );
    }

    return null;
};
