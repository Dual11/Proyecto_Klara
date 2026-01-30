

    export default function passLength(password) {
    if (password.length === 0) return { ok: false, message: "" };
    if (password.length < 8)  return { ok: false, message: "¿8 caracteres? ¿Estamos en 2005?" };
    if (password.length < 12) return { ok: false, message: "12 mínimo, flojo. ¡Dale más!" };
    return { ok: true, message: "Longitud decente... por los pelos" };
}