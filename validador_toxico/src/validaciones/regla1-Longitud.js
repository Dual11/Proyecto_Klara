export default function rule1MinLength(password) {
    const min = 5;
    const len = password.length;

    if (len < min) {
        return {
            ok: false,
            message: len === 0
                ? "Escribe algo, cobarde. ¿Te da miedo el teclado?"
                : `¿${len} caracteres? ¿Eso es todo lo que tienes? Patético. Necesitas ${min} mínimo.`
        };
    }

    return {
        ok: true,
        message: `Vale, ${len} caracteres... al menos no es una contraseña de bebé de 3 letras. Por los pelos.`
    };
}