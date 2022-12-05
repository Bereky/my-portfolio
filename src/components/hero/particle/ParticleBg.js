import Particles from "react-tsparticles";

import { useCallback } from "react";
import { loadFull } from "tsparticles";


const PrBg = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    /* const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []); */

    return (
        <Particles
            id="tsparticles"
            className="w-full z-1 absolute"
            init={particlesInit}
            /* loaded={particlesLoaded} */
            options={{
                background: {
                    color: {
                        value: "#F7FBFC"
                    },
                position: 'relative',

                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 90,
                            duration: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000",
                    },
                    links: {
                        color: "#000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
 
export default PrBg;