export default function PassDisplay({ password }) {
    if (!password) return <div className="empty">— escribe algo —</div>;

    return (
        <div className="password-display">
            {password.split('').map((char, i) => (
                <span key={i} className={/[A-Z]/.test(char) ? 'upper' : ''}>
          {char}
        </span>
            ))}
        </div>
    );
}