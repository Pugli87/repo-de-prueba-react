import React, { useState } from 'react';

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2> Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        {contador > 0 && <button onClick={restar}>-</button>}
      </nav>
      <p>Contador de {props.titulo}</p> {/* Paso de propiedades por defecto */}
      <h3>{contador}</h3>
    </>
  );
}
ContadorHooks.defaultProps = {
  titulo: 'Clicks',
};
