function Keyboard(props) {
    return (
        <div>
            {props.KeyboardType.map((item) => (
                <button key={item} onClick={() => props.handleClick(item)}>
                    {item}
                </button>
            ))}
        </div>
    );
}
export default Keyboard;
