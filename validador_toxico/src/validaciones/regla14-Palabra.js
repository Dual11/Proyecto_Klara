export default function regla14Palabra(password) {
    if (!/Klara Apruebanos/i.test(password)) {
        return {
            ok: false,
            message: "Falta la frase mágica, 'Klara Apruebanos'. No es tan difícil."
        };
    }

    return {
        ok: true,
        message: "Tiene 'Klara Apruebanos'. Qué educado sois de repente."
    };
}
