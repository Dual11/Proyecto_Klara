import { useState, useMemo } from 'react';

import PassInput from './componentes/PassInput';
import PassDisplay from './componentes/PassDisplay';
import Reglas from './componentes/Reglas';
import './style.css'

import { regla1, regla2, regla3, regla4, regla5, regla6, regla7, regla8, regla9, regla10, regla11, regla12, regla13, regla14, regla15 } from './validaciones';


//estos mensajes son provisionales, hay que cambiarlos
const ALL_RULES = [
    { fn: regla1, title: "Mínimo 5 caracteres" },
    { fn: regla2, title: "Al menos una mayúscula" },
    { fn: regla3, title: "Al menos un número" },
    { fn: regla4, title: "Al menos un Simbolo" },
    { fn: regla5, tittle: "Al menos un espacio" },
    { fn: regla6, tittle: "Al menos dos espacio" },
    { fn: regla7, tittle: "Al menos dos números" },
    { fn: regla8, tittle: "Al menos dos Simbolos" },
    { fn: regla9, tittle: "Mínimo 25 carácteres" },
    { fn: regla10, tittle: "Al menos 3 espacios" },
    { fn: regla11, tittle: "Al menos una X" },
    { fn: regla12, tittle: "Al menos un emoji de diablo" },
    { fn: regla13, tittle: "Al menos una tilde u ñ" },
    { fn: regla14, tittle: "Al menos una frase" },
    { fn: regla15, tittle: "Por favor" }
    //añade el nuevo metodo, y su mensaje
];

export default function App() {
    const [password, setPassword] = useState('');

    //no es funcional este metodo
    const resetGame = () => {
        setPassword('');
        alert("¿Ya te rendiste? JAJAJA... empieza de cero");

    };


    // Calculamos cuántas reglas hemos desbloqueado
    const maxRuleIndex = useMemo(() => {
        let index = 0;
        while (index < ALL_RULES.length) {
            const result = ALL_RULES[index].fn(password);
            if (!result.ok) break;
            index++;
        }
        return index;
    }, [password]);

    // Evaluamos SOLO las reglas activas
    const ruleResults = useMemo(() => {
        return ALL_RULES.slice(0, maxRuleIndex + 1).map((rule, i) => ({
            number: i + 1,
            ...rule.fn(password),
            active: i <= maxRuleIndex
        }));
    }, [password, maxRuleIndex]);

    return (
        <div className="main">


            <header className="header">
                <div
                    className="logo logo-right"
                    onClick={resetGame}
                    title="Pulsa para resetear todo (modo troll activado)"
                >
                    Alex & Iker
                </div>
                <h1>Validador de Contraseña Tóxico</h1>
                <div
                    className="logo logo-left"
                    onClick={resetGame}
                    title="Pulsa para resetear todo (modo troll activado)"
                >
                    Iker & Alex
                </div>


            </header>


            <main className="container">
                <PassInput value={password} onChange={setPassword}/>
                <PassDisplay password={password}/>

                <div className="rules-list">
                {ruleResults.map((r) => (
                        <Reglas
                            key={r.number}
                            number={r.number}
                            message={r.message}
                            ok={r.ok}
                            active={r.active}
                        />
                    ))}

                    {maxRuleIndex < ALL_RULES.length && (
                        <div className="next-rule-hint">
                            Siguiente regla desbloqueada cuando completes la actual...
                        </div>
                    )}

                    {maxRuleIndex === ALL_RULES.length && (
                        <div className="win-message">
                            ¡Completaste las 15 reglas básicas! 🎉
                        </div>
                    )}
                </div>
            </main>

        </div>
    );
}