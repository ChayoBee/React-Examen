const Home = (props) => {
    return (
        <>
            <h1>¡Pizzería Mamma Mía!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            {props.children}
        </>
    );
};
export default Home;