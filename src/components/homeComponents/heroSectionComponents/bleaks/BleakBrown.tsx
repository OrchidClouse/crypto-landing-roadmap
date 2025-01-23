const BleakBrown = ({ x, y }: { x: number; y: number }) => {
    return (
        <div
            className="w-[14px] h-[14px] bg-[#64505c] moveUp absolute"
            style={{
                top: `${y}px`,
                left: `${x}px`,
            }}
        />
    );
};

export default BleakBrown;
