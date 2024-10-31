export default function Style({ handleClick, buttons }) {
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
