export default function Reglas({ number, message, ok, active }) {
    if (!active) return null;

    return (
        <div className={`rule ${ok ? 'ok' : 'fail'}`}>
            <span className="number">Regla {number}</span>
            <span className="message">{message}</span>
            <span className="status">{ok ? '✓' : '✗'}</span>
        </div>
    );
}