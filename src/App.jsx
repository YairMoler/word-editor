import { useState } from "react";

import "./App.css";
import Display from "./components/Display";
import KeyboardTypeArray from "./data/keyboard-data";
import Style from "./components/style";

function App() {
    const currentStyle = {
        currentSize: 12,
        currentColor: "black",
    };

    const [KeyboardType, setKeyboardType] = useState(KeyboardTypeArray[0]);
    const [charArray, setCharArray] = useState([
        { size: 12, colors: "black", value: "a" },
        { size: 12, colors: "black", value: "a" },
        { size: 12, colors: "black", value: "h" },
    ]);

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

            {/* <Keyboard />
            <Languages /> */}

            <Style handleClick={changeStyle("currentSize")} buttons={[12, 14, 16, 18, 20]} />
            <Style handleClick={changeStyle("currentColor")} buttons={["black", "green", "red", "blue", "pink"]} />
        </>
    );
}

export default App;
