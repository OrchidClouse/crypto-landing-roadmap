import { useEffect, useState } from "react";
import Particle from "./Particle";

const ParticleSpawner = ({
    left,
    top,
    width,
    height,
}: {
    left: number;
    top: number;
    width: number;
    height: number;
}) => {
    const createRandomSize = () => {
        const randomValue = Math.random() * 100;

        if (randomValue <= 20) {
            return 14;
        } else if (randomValue > 20 && randomValue <= 50) {
            return 19;
        } else {
            return 24;
        }
    };

    const createInitialCoords = () => ({
        x: Math.random() * (width / 2) + 0.25 * width,
        y: Math.random() * (height / 2) + 0.25 * height,
    });

    const createFinishOuterCoords = () => {
        let x: number, y: number;
        do {
            x = Math.random() * width;
            y = Math.random() * height;
        } while (
            x > 0.25 * width &&
            x < 0.75 * width &&
            y > 0.25 * height &&
            y < 0.75 * height
        );
        return { x, y };
    };

    const [particleInfo, setParticleInfo] = useState<
        {
            id: number;
            size: number;
            initPos: { x: number; y: number };
            finishPos: { x: number; y: number };
        }[]
    >([]);

    useEffect(() => {
        let nextId = 0;
        const intervalId = setInterval(() => {
            setParticleInfo((prevParticles) => {
                const newParticle = {
                    id: nextId++,
                    size: createRandomSize(),
                    initPos: createInitialCoords(),
                    finishPos: createFinishOuterCoords(),
                };

                // Always take 20 last elements
                const updatedParticles = [...prevParticles, newParticle].slice(
                    -20,
                );

                return updatedParticles;
            });

            // Remove particles after 4 seconds (the duration of the animation)
            setTimeout(() => {
                setParticleInfo((prevParticles) => prevParticles.slice(1));
            }, 4000);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className="border-[1px] border-red-400 border-solid absolute border-transparent"
            style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            {particleInfo.map((particle) => (
                <Particle
                    key={particle.id}
                    size={particle.size}
                    initialPosition={particle.initPos}
                    finishPosition={particle.finishPos}
                />
            ))}
            <div
                className="border-[1px] border-green-400 border-solid absolute border-transparent"
                style={{
                    left: `25%`,
                    top: `25%`,
                    width: `${width / 2}px`,
                    height: `${height / 2}px`,
                }}
            ></div>
        </div>
    );
};

export default ParticleSpawner;
