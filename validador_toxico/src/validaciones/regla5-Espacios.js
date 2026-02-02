export default function rule5Espacios(password) {
    if (!/\s/.test(password)) {
        return {
            ok: false,
            message: "¿Sin espacios? ¿Qué pasa, que te dan alergia? Pon al menos uno y deja de ir de lista."
        };
    }

    return {
        ok: true,
        message: "Mira tú, usando espacios. Quién diría que sabías pulsar la barra espaciadora."
    };
}
