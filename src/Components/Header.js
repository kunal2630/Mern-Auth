import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { useState } from "react";

const Header = () => {
	const [hamburgerState, sethamburgerState] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});
	return (
		<nav className="flex items-center justify-between px-8 py-2.5 shadow-2xl fixed top-0 w-full z-30 bg-white   ">
			<div>
				<img
					className="w-20"
					src="https://s3.amazonaws.com/www-inside-design/uploads/2019/05/woolmarkimagelogo-1024x576.png"
					alt="logo"
				/>
			</div>
			<div
				className={` sm:flex text-gray-700  items-center justify-center gap-8 font-semibold text-lg hover:cursor-pointer ${
					hamburgerState && windowWidth <= 640
						? " absolute top-14 left-0 py-8 bg-white w-full text-xl grid place-items-center "
						: "hidden"
				}`}
			>
				<Link to="/home">
					<ul className="hover:text-red-500">Home</ul>
				</Link>

				<Link to="/about">
					<ul className="hover:text-red-500">About</ul>
				</Link>
				<Link to="/products">
					<ul className="hover:text-red-500">Products</ul>
				</Link>
				<Link to="/">
					<button
						className={`flex ${
							hamburgerState && windowWidth <= 640
								? ""
								: "py-1 px-4 bg-red-500 rounded-md text-white"
						}  `}
					>
						Sign In
					</button>
				</Link>
			</div>

			<div
				className="flex sm:hidden hover:cursor-pointer"
				onClick={() => {
					sethamburgerState(!hamburgerState);
				}}
			>
				{hamburgerState ? (
					<IoCloseSharp size={32} />
				) : (
					<GiHamburgerMenu size={28} />
				)}
			</div>
		</nav>
	);
};

export default Header;
