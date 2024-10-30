import { useState } from "react";

import "./App.css";

function App() {
    const [charArray, setCharArray] = useState({});
    return (
        <>
            <Display />
            <Keyboard />
            <Languages />
            <Sizes />
            <Colors />
            <Specials />
        </>
    );
}

export default App;
