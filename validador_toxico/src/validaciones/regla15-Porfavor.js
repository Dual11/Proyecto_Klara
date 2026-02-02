export default function regla14Palabra(password) {
    if (!/Por favor/i.test(password)) {
        return {
            ok: false,
            message: "Para finalizar, di la palabra mágica."
        };
    }

    return {
        ok: true,
        message: "Enhorabuena!."
    };
}
