export default function regla12Emoji(password) {
    if (!password.includes("😈")) {
        return {
            ok: false,
            message: "Falta el emoji 😈. Esto es un juego, no un Excel."
        };
    }

    return {
        ok: true,
        message: "Emoji detectado. Ahora sí, esto empieza a dar miedo."
    };
}
