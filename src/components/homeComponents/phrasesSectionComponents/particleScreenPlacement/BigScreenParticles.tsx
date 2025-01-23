import ParticleSpawner from "../particles/ParticleSpawner";

const BigScreenParticles = () => {
    return (
        <>
            <ParticleSpawner left={0} top={-11} width={900} height={500} />
            <ParticleSpawner left={-13} top={-0} width={640} height={240} />
            <ParticleSpawner left={33} top={-0} width={640} height={240} />
            <ParticleSpawner left={-15} top={31} width={1200} height={260} />
            <ParticleSpawner left={19} top={53} width={1000} height={230} />
            <ParticleSpawner left={-5} top={68} width={580} height={240} />
            <ParticleSpawner left={26} top={68} width={580} height={240} />
            <ParticleSpawner left={24} top={60} width={300} height={400} />
        </>
    );
};

export default BigScreenParticles;
