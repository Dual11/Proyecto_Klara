export default function rule8DosSimbolos(password) {
    const symbols = password.match(/[!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?]/g) || [];

    if (symbols.length < 2) {
        return {
            ok: false,
            message: "¿Tan solo 1 símbolo? ¿En serio? Da bastante lástima."
        };
    }

    return {
        ok: true,
        message: "Ahora sí. Dos símbolos, por fin has entendido el juego."
    };
}
