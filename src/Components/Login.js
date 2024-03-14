import React, { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
	const [signIn, setSignIn] = useState(true);
	const [emailErrorMsg, setEmailErrorMsg] = useState(null);
	const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
	const [passwordHide, setPasswordHide] = useState(true);

	const email = useRef(null);
	const password = useRef(null);

	const toggleSignUp = () => {
		setEmailErrorMsg(null);
		setPasswordErrorMsg(null);

		setSignIn(!signIn);
	};

	return (
		<div className="relative ">
			<div className="   w-full  h-[100vh]  flex items-center justify-center   bg-gray-700  ">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="bg-black rounded-2xl p-6 md:w-1/2  lg:w-1/3 w-[97%]
             bg-opacity-90 "
				>
					<h1 className="flex items-center justify-center text-white text-4xl font-bold m-4 mb-8">
						{signIn ? "Sign In" : "Sign Up"}
					</h1>
					<input
						className=" text-white w-[90%] p-[13px] m-3 text-lg bg-[#333333] rounded-md outline-none"
						ref={email}
						type="text"
						name=""
						placeholder="abc@gmail.com"
						required
					/>
					{!signIn && emailErrorMsg && (
						<p className="text-red-600 px-3 py-1 text-xl">
							{emailErrorMsg}
						</p>
					)}
					<div className="relative">
						<input
							className="text-white w-[90%] p-[13px] m-3 text-lg bg-[#333333] rounded-md outline-none"
							ref={password}
							type={passwordHide ? "password" : "text"}
							name=""
							placeholder="Password"
							required
						/>
						<div
							className="absolute top-8 right-10 hover:cursor-pointer"
							onClick={() => {
								setPasswordHide(!passwordHide);
							}}
						>
							{passwordHide ? (
								<FaEye color="white" size={22} />
							) : (
								<FaEyeSlash color="white" size={22} />
							)}
						</div>
					</div>
					{!signIn && passwordErrorMsg && (
						<p className="text-red-600 px-3 py-1 text-xl">
							{passwordErrorMsg}
						</p>
					)}
					{/* {signIn && authError && (
              <p className="text-red-600 px-3 py-1 text-xl">
                Invalid Username or Password
              </p>
            )} */}
					<button
						type="submit"
						className="w-[90%] text-xl p-2 m-3 mt-4 text-white bg-[#e50914] rounded-lg "
					>
						{signIn ? "Sign In" : "Sign Up"}
					</button>

					<p className=" m-3  text-xl text-gray-400">
						{signIn ? "New User?" : "Already Registered!"}{" "}
						<span
							onClick={toggleSignUp}
							className=" hover:underline hover:cursor-pointer text-2xl text-white"
						>
							{signIn ? "Sign Up Now!" : "Sign In"}
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
