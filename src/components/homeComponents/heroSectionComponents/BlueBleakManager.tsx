import { useEffect, useState } from "react";
import BleakBlue from "./bleaks/BleakBlue";
import BleakBrown from "./bleaks/BleakBrown";

const BleakSpawner = () => {
    const [blueBleaks, setBlueBleaks] = useState<
        { id: number; x: number; y: number }[]
    >([]);
    const [nextBlueId, setNextBlueId] = useState(0);

    const [brownBleaks, setBrownBleaks] = useState<
        { id: number; x: number; y: number }[]
    >([]);
    const [nextBrownId, setNextBrownId] = useState(0);

    const createBlueBleak = () => {
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = Math.random() * window.innerHeight;

        setBlueBleaks((prevBleaks) => [
            ...prevBleaks,
            { id: nextBlueId, x: randomX, y: randomY },
        ]);
        setNextBlueId(nextBlueId + 1);

        const timer = setTimeout(() => {
            setBlueBleaks((prevBleaks) => prevBleaks.slice(1));
            clearTimeout(timer);
        }, 7000);
    };

    const createBrownBleak = () => {
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = Math.random() * window.innerHeight;

        setBrownBleaks((prevBleaks) => [
            ...prevBleaks,
            { id: nextBrownId, x: randomX, y: randomY },
        ]);
        setNextBrownId(nextBrownId + 1);

        const timer = setTimeout(() => {
            setBrownBleaks((prevBrownBleaks) => prevBrownBleaks.slice(1));
            clearTimeout(timer);
        }, 7000);
    };

    useEffect(() => {
        const interval = setInterval(createBlueBleak, 1000);
        return () => clearInterval(interval);
    }, [nextBlueId]);

    useEffect(() => {
        const interval = setInterval(createBrownBleak, 1000);
        return () => clearInterval(interval);
    }, [nextBrownId]);

    return (
        <div>
            {blueBleaks.map((bleak) => (
                <BleakBlue key={bleak.id} x={bleak.x} y={bleak.y} />
            ))}
            {brownBleaks.map((bleak) => (
                <BleakBrown key={bleak.id} x={bleak.x} y={bleak.y} />
            ))}
        </div>
    );
};

export default BleakSpawner;
