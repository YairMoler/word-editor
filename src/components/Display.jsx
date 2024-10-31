import Char from "./Char";

export default function Display({ charArray }) {
    return (
        <div>
            {charArray.map((char, index) => (
                <Char size={char.size} color={char.color} value={char.value} key={index} />
            ))}
        </div>
    );
}
