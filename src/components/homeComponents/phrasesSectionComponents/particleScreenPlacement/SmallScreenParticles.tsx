import ParticleSpawner from "../particles/ParticleSpawner";

const SmallScreenParticles = () => {
    return (
        <>
            <ParticleSpawner left={-18} top={-35} width={550} height={700} />
            <ParticleSpawner left={-18} top={-35} width={550} height={700} />
            <ParticleSpawner left={-18} top={-35} width={550} height={700} />
        </>
    );
};

export default SmallScreenParticles;
