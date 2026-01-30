    import { useState, useEffect } from "react";
    import passLength from "./validaciones/passLength.js";
    import PassInput from "./components/passInput";
    import "./index.css";

    // ← solo la función, sin ()
    const validarTodo = [passLength];

    export default function App() {
    const [password, setPassword] = useState('');
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        if (!password.trim()) {
        setResultado([]);
        return;
        }

        // Ahora sí: ejecutamos cada función con el password actual
        const validar = validarTodo.map((fn) => fn(password));
        setResultado(validar);
    }, [password]);

    return (
        <div className="main">
        <h3>Validador Tóxico de contraseña</h3>
        <p className="msj">Ya te está juzgando</p>

        <PassInput value={password} onChange={setPassword} />

        </div>
    );
    }