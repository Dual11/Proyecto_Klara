export default function regla11LetraX(password) {
    if (!/x/i.test(password)) {
        return {
            ok: false,
            message: "Quiero una X. Sí, una letra concreta. No preguntes."
        };
    }

    return {
        ok: true,
        message: "Tiene una X. Increíblemente has seguido instrucciones."
    };
}
