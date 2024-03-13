import PizzaList from "../Components/PizzaList";
import { useParams } from "react-router-dom";

const Pizzas = (props) => {
    let {selectedPizza} = useParams();

    return (
        <>
            <h2>{props.from == "home" ? "Detalles" : "Catálogo"}</h2>
            <ul>
                {
                    props.data.map((pizza, index) => {
                        if (
                            selectedPizza != undefined &&
                            selectedPizza != ''
                        ) {
                            if (pizza.name.split(" ").join("") == selectedPizza){
                                return <PizzaList
                                key={pizza.id}
                                name={pizza.name}
                                desc={pizza.desc}
                                img={pizza.img}
                                ingredients={pizza.ingredients}
                                price={pizza.price}
                                count={pizza.count} />
                            } else {
                                return null
                            }
                        }
                        else if (props.from == "home" && index < 3) {
                            return <PizzaList
                            key={pizza.id}
                            name={pizza.name}
                            desc={pizza.desc}
                            img={pizza.img}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            count={pizza.count} />
                        } else if (props.from !== "home"){
                            return <PizzaList 
                            key={pizza.id}
                            name={pizza.name}
                            desc={pizza.desc}
                            img={pizza.img}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            count={pizza.count}/>
                        }
                    })
                }
            </ul>
        </>
    );
};
export default Pizzas;