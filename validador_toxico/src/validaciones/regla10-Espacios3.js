export default function rule10TresEspacios(password) {
    const spaces = password.match(/\s/g) || [];

    if (spaces.length < 3) {
        return {
            ok: false,
            message: "1 espacio más cabeza almendra."
        };
    }

    return {
        ok: true,
        message: "Estas en tu prime, sigue así!."
    };
}