export default function PassInput({ value, onChange }) {
    return (
        <input
            type="password"
            placeholder="Tu contraseña patética aquí..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="input"
        />
    );
}