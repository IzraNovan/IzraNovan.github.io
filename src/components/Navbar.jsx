import React, { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constant";
import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className='w-full flex py-6 justify-between items-center nav text-white'>
			<span className='flex text-gradient bg-clip-text text-transparent font-semibold'>
				<DiCssdeck className='text-3xl' />
				<h1 className='text-2xl'>Portzra</h1>
			</span>

			<ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-14'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className='cursor-pointer'>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className='list-none flex-col justify-end items-center flex-1 gap-16'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className='cursor-pointer'>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
