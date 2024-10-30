import { useState } from "react";

import "./App.css";
import Display from "./components/Display";
function App() {
    const KeyboardTypeArray = [[], []];
    const [KeyboardType, setKeyboardType] = useState();
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
