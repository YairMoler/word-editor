import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import KeyboardTypeArray from "./data/keyboard-data";
import Keyboard from "./components/Keyboard";
import Style from "./components/style";

function App() {
    const [currentStyle, setCurrentStyle] = useState({
        currentSize: 12,
        currentColor: "black",
    });

    const [KeyboardType, setKeyboardType] = useState(KeyboardTypeArray.english);
    const [charArray, setCharArray] = useState([]);
    function addChar(char) {
        setCharArray((prevCharArray) => [...prevCharArray, { size: currentStyle.currentSize, color: currentStyle.currentColor, value: char }]);
        console.log("{ size: currentStyle.currentSize, colors: currentStyle.currentColor, value: char }: ", {
            size: currentStyle.currentSize,
            colors: currentStyle.currentColor,
            value: char,
        });
    }

    function changeStyle(type) {
        return function (value) {
            setCurrentStyle((prevCurrentStyle) => ({ ...prevCurrentStyle, [type]: value }));
            console.log("{ ...prevCurrentStyle, [type]: value }: ", { ...currentStyle, [type]: value });
            console.log("type: ", type);
        };
    }

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
