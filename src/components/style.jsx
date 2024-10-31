export default function Style({ handleClick, buttons }) {
    console.log("handleClick: ", handleClick);

    return (
        <>
            {buttons.map((button, index) => (
                <button onClick={() => handleClick(button)} key={index}>
                    {button}
                </button>
            ))}
        </>
    );
}
