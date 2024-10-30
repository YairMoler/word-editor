import Char from "./Char";

export default function Display({ charArray }) {
    console.log("charArray: ", charArray);
    console.log("charArray: ", charArray[0]);
    console.log("charArray: ", charArray[0].size);

    return (
        <>
            <Char size={charArray[0].size} color={charArray[0].color} value={charArray[0].value} />
            <Char size={charArray[1].size} color={charArray[1].color} value={charArray[1].value} />
            <Char size={charArray[2].size} color={charArray[2].color} value={charArray[2].value} />
        </>
    );
}
