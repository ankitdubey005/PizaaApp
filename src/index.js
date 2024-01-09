import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

// const styles = { color: "blue", textTransform: "lowercase", fontSize: "25px" }

function App() {
	return (
		//using css as a external style sheet and then using it with the help of classname
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}
// after v18
//pointting to the index.html root element with a variable and then rendering it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

function Menu() {
	let pizzas = pizzaData;
	// pizzas = 0
	const numPizzas = pizzas.length;
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{/* {using conditional rendering so that we can only display when there are some pizzas present otherwise it wont show} */}
			{/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
			{/* {now using ternery opertaor for conditional rendering} */}
			{numPizzas > 0 ? (
				<>
					{/* react fragment */}
					<p>
						Authentic Italian Cuisine . 6 creative dishes to choose from . All
						from our stome oven . all organic . all delicious
					</p>
					<ul className="pizzas">
						{pizzas.map((pizza) => (
							<Pizza pizzaObj={pizza} key={pizza.name} />
						))}
					</ul>
				</>
			) : (
				"We are still Cooking For you ♥️♥️"
			)}
			{/* <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        photoName="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={15}
      /> */}
		</main>
	);
}
function Pizza({ pizzaObj }) {
	// if (pizzaObj.soldOut)
	// 	return <p style={{ fontSize: "30px" }}>Sold Out Bruhhh!!!😢😢</p>;

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "SOLD OUT " : pizzaObj.price}</span>
			</div>
		</li>
	);
}
function Header() {
	return (
		<header
			className="header"
			//inline styling with the help of js mode
			// style={{
			//   color: "red",
			//   textTransform: "uppercase",
			// }}
			//using CSS stored as a object in a varibale
			// style={styles}
		>
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 23;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);
	return (
		<footer className="footer">
			{/*---- Using Short Circuiting for Conditional Rendering --- */}
			{/* {isOpen && (
        <div className="order">
          <p>
            We're Open Until {closeHour}:00 . Come visit us or order online.
          </p>
          <button className="btn">Order Now!!</button>
        </div>
      )} */}
			{/* ------Using Ternery Operator for Conditional Rendering--------- */}
			{isOpen ? (
				<Order closeHour={closeHour} openHour={openHour} />
			) : (
				<p>We are coming Right Back at {openHour}:00</p>
			)}
		</footer>
	);
}

function Order({ closeHour, openHour }) {
	// console.log(;
	return (
		<div className="order">
			<p>
				We're Open form {openHour}:00 to {closeHour}:00 . Come visit us or order
				online.
			</p>
			<button className="btn">Order Now!!</button>
		</div>
	);
}
// before v18 we used to directly render the with the React Class
// React.render(<App />);
