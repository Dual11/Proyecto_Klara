export default function rule2Uppercase(password) {
    if (!/[A-Z]/.test(password)) {
        return {
            ok: false,
            message: "¿Todo en minúsculas? ¿Tienes alergia al Shift o simplemente eres vago?"
        };
    }

    return {
        ok: true,
        message: "Bien, una mayúscula... no me esperaba tanto esfuerzo de alguien como tú."
    };
}