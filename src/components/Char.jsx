export default function Char({ size, color, font, value }) {
    return <div style={{ fontSize: size, color: color , fontFamily:font}}>{value}</div>;
}
