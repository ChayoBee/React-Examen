import { useContext } from "react";
import { PizzaContext } from "../App";

const Carrito = () => {
    const contexto = useContext(PizzaContext);
    const getTotal = () => {
        let total = 0
        contexto.dataPizzas.forEach((pizza) => {
            total = total + (pizza.price * pizza.count)
        })
        return total;
    };

    return (
        <>
            <h1>Carrito</h1>
            {contexto.dataPizzas.map((pizza, index) => 
                <li key={index} className="mt-4">
                    <img 
                    src={pizza.img} 
                    alt={pizza.name}
                    style={{maxHeight: '50px' }} />
                    {pizza.name} {pizza.count} x ${pizza.price}
                </li>)}
            <p>Total: ${ getTotal()}</p>
        </>
    );
};
export default Carrito;