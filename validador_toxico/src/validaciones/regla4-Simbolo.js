export default function rule4Simbolo(password) {
    if (!/[!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]/.test(password)) {
        return {
            ok: false,
            message: "¿Ni un mísero símbolo? Venga, ponle un ! o algo, que esto parece una contraseña de 2003."
        };
    }

    return {
        ok: true,
        message: "Ohhh, un símbolo. Mira qué hacker te has levantado hoy."
    };
}
