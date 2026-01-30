# Guia basica para añadir cosas


## En validaciones
- Creamos una nueva regla, siguiendo la estructura:
- 
- regla4-nombre.js

- Luego en el archivo de la misma carpeta
- **index.js**
- export { default as **regla3** } from '**./regla3-numero.js**';

- le añadimos un alias el metodo

## En App.jsx
- Aqui añadimos el alias del nuevo metodo
- import { regla1, regla2, regla3,**nuevoMetodo** } from './validaciones';


## el estilo es provicona