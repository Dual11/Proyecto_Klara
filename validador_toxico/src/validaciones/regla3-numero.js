export default function rule3Number(password) {
    if (!/\d/.test(password)) {
        return {
            ok: false,
            message: "Sin números, ¿eh? ¿Tu contraseña es para el diario de tu abuela o qué?"
        };
    }

    return {
        ok: true,
        message: "Un número... milagro. Pensé que ibas a usar solo 'qwerty' como siempre."
    };
}