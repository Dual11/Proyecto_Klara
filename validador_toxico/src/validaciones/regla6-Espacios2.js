export default function rule6DosEspacios(password) {
    const spaces = password.match(/\s/g) || [];

    if (spaces.length < 2) {
        return {
            ok: false,
            message: "Un solo espacio no impresiona a nadie. Pon dos, que tampoco cuesta tanto."
        };
    }

    return {
        ok: true,
        message: "Dos espacios. Vale, admito que esto empieza a parecer intencionado."
    };
}
