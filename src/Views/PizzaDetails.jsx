import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../App";
//import { useLocation } from "react-router-dom";

const PizzaDetails = () => {
    //const { state } = useLocation();;
    const { piza } = useContext(PizzaContext);
    const { id } = useParams();

    const selectedPizza = piza.find((pizza) => pizza.id === id);

    return (
        <div>
            {selectedPizza ? (
                <div>
                    <h1 className="nombreID">{selectedPizza.name}</h1>
                    <div className="stats flex flex-col gap-3 p-3">
                        <figure className="imagen">
                            <img 
                            loading="lazy" 
                            src={selectedPizza.img} 
                            alt={selectedPizza.name} />
                        </figure>
                        <hr />
                        <figure>
                            <p>${selectedPizza.desc}</p>
                        </figure>
                    <ul>
                        {selectedPizza.ingredients.map((ingredient, index) => (
                            <li key={index}>🍕{ingredient}</li>
                        ))}
                    </ul>
                    </div>
                        <div className="precio">
                            <h3>${selectedPizza.price}</h3>
                        </div>
                    <button onClick={() => handlePizza(selectedPizza.id, 'add')}>Agregar al Carrito</button>
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </div>
    );
};

export default PizzaDetails;