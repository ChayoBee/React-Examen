import { useContext } from "react";
import { PizzaContext } from "../App";
import { useNavigate } from "react-router-dom";

const PizzaList = () => {
    const { dataPizzas } = useContext(PizzaContext);
    const navigate = useNavigate();

    const handlePizza = (name, mode) => {
        const newPizza = [];
        contexto.dataPizzas.forEach((pizza) => {
            if (pizza.name === name){
                const operate = mode == 'add' ? pizza.count + 1 : pizza.count - 1
                newPizza.push(
                    {...pizza, count: operate}
                )
            } else {
                newPizza.push(pizza)
            }
        })
        contexto.setDataPizzas(newPizza);
    };

    const handleDetails = (pizzaId) => {
        const selectedPizza = dataPizzas.find(pizza => pizza.id === pizzaId);
        navigate(`/pizza/${selectedPizza.id}`, {state: { pizza: selectedPizza }});
    };

    return (
        <div className="flex flex-col gap-2 justify-center items-center p-3">
            {dataPizzas.map((pizza) =>(
                <div key={pizza.id}>
                    <img src={pizza.img} alt={pizza.name} />
                    <figure>
                        <h2>{pizza.name}</h2>
                        <hr />
                    </figure>
                    <figure>
                        <li>
                            <ul>
                                {pizza.ingredients.map((ingredient, index) => (
                                    <li key={index}>🍕{ingredient}</li>
                                ))}
                            </ul>
                        </li>
                    <h3>${pizza.price}</h3>
                    </figure>
                    <button onClick={() => handleDetails(pizza.id)}>
                        👀 Ver más
                    </button>
                    <button onClick={() => handlePizza(pizza.name, 'add')}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
};
export default PizzaList;