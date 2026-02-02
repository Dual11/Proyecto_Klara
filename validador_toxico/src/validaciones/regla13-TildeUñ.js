export default function regla13TildeUñ(password) {
    if (!/[áéíóúñÁÉÍÓÚÑ]/.test(password)) {
        return {
            ok: false,
            message: "Ni una tilde ni una ñ… ¿en qué país vives?"
        };
    }

    return {
        ok: true,
        message: "Tilde o ñ encontrada. España approved."
    };
}
