import { useState } from "react";

import "./App.css";
import Display from "./components/Display";
import KeyboardTypeArray from "./data/keyboard-data";
function App() {
    const [KeyboardType, setKeyboardType] = useState(KeyboardTypeArray[0]);
    const [charArray, setCharArray] = useState([
        { size: 12, colors: "black", value: "a" },
        { size: 12, colors: "black", value: "a" },
        { size: 12, colors: "black", value: "h" },
    ]);
    return (
        <>
            <Display charArray={charArray} />
            {/* <Keyboard />
            <Languages />
            <Sizes />
            <Colors />
            <Specials /> */}
        </>
    );
}

export default App;
