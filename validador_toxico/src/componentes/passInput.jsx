export default function PassInput({ value, onChange }) {
    return (
        <input
            type="password" //modo prueba, cambiarlo al entregarlo
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Escribe tu contraseña..."
            style={{ width: '100%', padding: '12px', fontSize: '1.2rem' }}
        />
    );
}