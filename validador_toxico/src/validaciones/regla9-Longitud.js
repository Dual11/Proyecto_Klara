export default function ruleMinLength10(password) {
    if (password.length < 25) {
        return {
            ok: false,
            message: "Sigue siendo corta. Mínimo 25 caracteres."
        };
    }

    return {
        ok: true,
        message: "Longitud correcta. Seguimos."
    };
}
