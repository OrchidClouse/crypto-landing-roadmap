import { useEffect, useState } from "react";

const Particle = ({
    size,
    initialPosition,
    finishPosition,
}: {
    size: number;
    initialPosition: { x: number; y: number };
    finishPosition: { x: number; y: number };
}) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartAnimation(true);
        }, 100);

        const dissapearTimeout = setTimeout(() => {
            setAnimate(true);
        }, 3000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(dissapearTimeout);
        };
    }, []);

    return (
        <div
            className={`${animate && "dissapear"} cryptorollBlackBg`}
            style={{
                position: "absolute",
                width: `${size}px`,
                height: `${size}px`,
                left: `${initialPosition.x}px`,
                top: `${initialPosition.y}px`,
                transform: startAnimation
                    ? `translate(${finishPosition.x - initialPosition.x}px,
                                 ${finishPosition.y - initialPosition.y}px)`
                    : `translate(0, 0)`,
                transition: "transform 4s ease",
            }}
        ></div>
    );
};

export default Particle;
