import { useState } from "react";

export default function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleIncrement() {
    if (count < stock) setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}
