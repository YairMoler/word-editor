import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import KeyboardTypeArray from "./data/keyboard-data";
import Keyboard from "./components/Keyboard";
function App() {
    const [KeyboardType, setKeyboardType] = useState(KeyboardTypeArray.english);
    const [charArray, setCharArray] = useState([]);
    function addChar(char) {
        setCharArray((prevCharArray) => [...prevCharArray, { size: 12, colors: "black", value: char }]);
    }
    return (
        <>
            <Display charArray={charArray} />
            <Keyboard KeyboardType={KeyboardType} handleClick={addChar}/>
            {/* <Languages />
            <Sizes />
            <Colors />
            <Specials /> */}
        </>
    );
}

export default App;
