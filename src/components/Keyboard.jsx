function Keyboard(props) {
    return (
        <div>
            {props.KeyboardType.map((item) => ( item === "\n" ? <br /> :
                <button key={item} onClick={() => props.handleClickAdd(item)}>
                    {item}
                </button>
            ))}
            <br /><button key="space" onClick={() => props.handleClickAdd(" ")}>
                space
            </button>
            <button key="delete" onClick={() => props.handleClickDelete()}>
                delete
            </button>
        </div>
    );
}
export default Keyboard;
