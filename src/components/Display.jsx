import Char from "./Char";
import style from "../css/Display.module.css";

export default function Display({ charArray }) {
    return (
        <div className={style.div}>
            {charArray.map((char, index) => (
                <Char size={char.size} color={char.color} value={char.value} key={index} />
            ))}
        </div>
    );
}
