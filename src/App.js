import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
