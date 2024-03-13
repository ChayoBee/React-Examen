import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Carrito from './Views/Carrito';
import PizzaList from './Components/PizzaList';
import Pizza from './Views/Pizza';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PizzaContext = createContext();

const App = () => {
  const [dataPizzas, setDataPizzas] = useState([]);

  const FetchPizza = async () => {
    const data = await fetch('/pizzas.json');
    const resp = await data.json();
    const newPizza = []
    resp.forEach(pizza => {
      newPizza.push({...pizza, count:0})
    })
    setDataPizzas(newPizza);
  };

  useEffect(() => {
    FetchPizza()
  }, []);

  useEffect(() => {
  }, [dataPizzas]);

  return (
    <PizzaContext.Provider value={{dataPizzas, setDataPizzas}}>
        <Navbar />

        <Routes>
          <Route path='/' element={
          <Home>
            <Pizza data={dataPizzas} from='home'/>
            <NavLink to='/pizza'>Ver Detalles</NavLink>
          </Home>
          } />
          <Route path='/pizza' elements={<Pizza data={dataPizzas}/>}/>
          <Route path='/pizza/:selectedPizza' element={<PizzaList data={dataPizzas}/>}/>
          <Route path='/carrito' element={<Carrito />} />
        </Routes>

    </PizzaContext.Provider>
  );
};

export default App;
