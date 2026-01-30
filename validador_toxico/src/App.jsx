
import { useState, useEffect} from "react";
import passLength from "./validaciones/passLength.js";
import PassInput from "./components/passInput";
import index from "./index.css"


const validarTodo = [passLength()]
export default function App() {

    const [password, setPassword] = useState('');
    const [resultado, setResultado] = useState([]);

    useEffect(() => {

        if (!password.trim()) {
            setResultado([]);
            return;
        }

        const validar = validarTodo.map((fn) => fn(password));
        setResultado(validar);
    }, [password]);

    return(
        <div className="main">
            <h3>Validador Toxico de contraseña</h3>
            <p className="msj"> Ya te esta juzgando</p>

            <PassInput value={password} onChange={setPassword} />


        </div>
    )
}
