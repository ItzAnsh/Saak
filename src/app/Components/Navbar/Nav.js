"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import Logo from "../../assets/Logo/Saak.svg";

function Login() {
	return (
		<>
			<Link href="/Auth/Login" className="hover:opacity-40 transition-all">
				Login
			</Link>{" "}
			/
			<Link href="/Auth/Signup" className="hover:opacity-40 transition-all">
				Signup
			</Link>
		</>
	);
}

const Nav = () => {
	const { data: session } = useSession({});
	const [name, setName] = useState("");

	useEffect(() => {
		if (session?.user?.name) {
			try {
				const a = session.user.name.split(" ")[0];
				setName(a);
			} catch {
				setName(session.user.name);
			}
		}
	}, [session]);

	return (
		<div className="relative container mx-auto 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
			<header className="container mx-auto w-full bg-[#393037] z-30 py-8 fixed">
				<nav id="Nav" className="flex justify-between items-center">
					<div className="gap-x-[97px] flex items-center">
						<Link href="/" className="relative p-7">
							<Image src={Logo} alt="Logo" fill />
						</Link>
						<div className="flex gap-[30px]">
							<Link href="/about" className=" font-latoLight navActive">
								About
							</Link>
							<Link href="/Dashboard" className=" font-latoLight navOthers">
								Shop Now
							</Link>
							<Link href="/about" className=" font-latoLight navOthers">
								Contact
							</Link>
							<Link href="/about" className=" font-latoLight navOthers">
								Saak Innovation
							</Link>
						</div>
					</div>
					{/* <div className="rounded-full w-[11.25px] h-[11.25px] border-2 border-white bg-[#fff]"></div> */}
					<div className="flex gap-x-4">
						{session ? (
							<>
								<button className="border-2 border-[#fff] p-[7px_18px] rounded-full flex font-Cabinet font-bold gap-x-[9px] items-center text-[14px]">
									<Link href="/Profile" className="text-white">
										Hi,{" "}
										<span className="underline hover:cursor-pointer">
											{name}
										</span>
									</Link>
								</button>
								<button
									className="border-2 border-[#fff] p-[7px_18px] rounded-full flex font-Cabinet font-bold gap-x-[9px] items-center text-[14px]"
									onClick={signOut}
								>
									<span className="text-white">Log out</span>
								</button>
							</>
						) : (
							<button className="border-2 border-[#fff] p-[7px_18px] rounded-full flex font-Cabinet font-bold gap-x-[9px] items-center text-[14px]">
								<Login />
							</button>
						)}
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
