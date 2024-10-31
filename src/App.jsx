import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import KeyboardTypeArray from "./data/keyboard-data";
import Keyboard from "./components/Keyboard";
import Style from "./components/style";
import Languages from "./components/Languages";

function App() {
    const [currentStyle, setCurrentStyle] = useState({
        currentSize: 12,
        currentColor: "black",
        currentFont: "DynaPuff",
    });
    const [KeyboardType, setKeyboardType] = useState(KeyboardTypeArray.english);
    const [charArray, setCharArray] = useState([]);

    function addChar(char) {
        setCharArray((prevCharArray) => [
            ...prevCharArray,
            { size: currentStyle.currentSize, color: currentStyle.currentColor, value: char, font: currentStyle.currentFont },
        ]);
        console.log("{ size: currentStyle.currentSize, colors: currentStyle.currentColor, value: char }: ", {
            size: currentStyle.currentSize,
            color: currentStyle.currentColor,
            value: char,
            font: currentStyle.currentFont,
        });
    }

    function deleteChar() {
        setCharArray((prevCharArray) => prevCharArray.filter((item, index) => index !== prevCharArray.length - 1));
    }

    function changeLanguages(language) {
        setKeyboardType(() => KeyboardTypeArray[language]);
    }

    function changeStyle(type) {
        return function (value) {
            setCurrentStyle((prevCurrentStyle) => ({ ...prevCurrentStyle, [type]: value }));
            console.log("{ ...prevCurrentStyle, [type]: value }: ", { ...currentStyle, [type]: value });
            console.log("type: ", type);
        };
    }

    function changeStyleAll(type) {
        return function (value) {
            setCharArray((prevCharArray) =>
                prevCharArray.map((item) => {
                    return { ...item, [type]: value };
                })
            );
            console.log(charArray);
        };
    }

    function clear() {
        setCharArray(() => []);
    }
    return (
        <>
            <h1>Let's write a nice sentence!</h1>
            <Display charArray={charArray} />

            <Keyboard KeyboardType={KeyboardType} handleClickAdd={addChar} handleClickDelete={deleteChar} />
            <Languages handleClick={changeLanguages} KeyboardType={["english", "hebrew", "upperCase"]} />

            <Style handleClick={changeStyle("currentSize")} buttons={[12, 14, 16, 18, 20]} />
            <br />
            <br />
            <Style handleClick={changeStyle("currentColor")} buttons={["black", "green", "red", "blue", "pink"]} />
            <br />
            <br />
            <Style handleClick={changeStyle("currentFont")} buttons={["DynaPuff", "Rubik Wet Paint", "Danfo", "Unlock", "Pacifico"]} />
            <br />
            <br />
            <h2>change all the displayed text</h2>
            <Style handleClick={changeStyleAll("size")} buttons={[12, 14, 16, 18, 20]} />
            <br />
            <br />
            <Style handleClick={changeStyleAll("color")} buttons={["black", "green", "red", "blue", "pink"]} />
            <br />
            <br />
            <button onClick={clear}>clear</button>
        </>
    );
}

export default App;
