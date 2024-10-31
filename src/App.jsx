import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import KeyboardTypeArray from "./data/keyboard-data";
import Keyboard from "./components/Keyboard";
import Style from "./components/style";

function App() {
    const currentStyle = {
        currentSize: 12,
        currentColor: "black",
    };

    const [KeyboardType, setKeyboardType] = useState(KeyboardTypeArray.english);
    const [charArray, setCharArray] = useState([]);
    function addChar(char) {
        setCharArray((prevCharArray) => [...prevCharArray, { size: 12, colors: "black", value: char }]);
    }

    function changeStyle(type) {
        return function (value) {
            currentStyle[type] = value;
            console.log("type: ", type);
            setCharArray((prevCharArray) => [...prevCharArray, { size: currentStyle.currentSize, color: currentStyle.currentColor, value: "a" }]);
        };
    }
    // console.log(changeStyle(currentSize));
    // console.log(changeStyle);
    return (
        <>
            <Display charArray={charArray} />

            <Keyboard KeyboardType={KeyboardType} handleClick={addChar} />
            {/* <Languages /> */}

            <Style handleClick={changeStyle("currentSize")} buttons={[12, 14, 16, 18, 20]} />
            <Style handleClick={changeStyle("currentColor")} buttons={["black", "green", "red", "blue", "pink"]} />
        </>
    );
}

export default App;
