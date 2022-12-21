import React from "react";
import styles from "../style";
import Button from "./mini-components/Button";
import { robot } from "../assets";

const Hero = () => {
	return (
		<header
			id='home'
			className={`flex md:flex-row flex-col top-0`}>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-14 absolute z-[6] md:static`}>
				<div className='flex-row flex items-center py-[6px] px-4 bg-title-gradient rounded-xl mb-5'>
					<p className={`${styles.paragraph} ml-2 text-gray-100`}>
						<span className='font-semibold '>Izra's</span> Portfolio
					</p>
				</div>

				<div className='flex flex-row justify-between items-center w-full'>
					<h1 className='flex-1 font-poppins font-bold ss:text-[72px] text-[50px] text-white ss:leading-[100.8px] leading-[75px]'>
						Welcome to <br className='sm:block hidden' />{" "}
						<span className='text-gradient'>My Personal Portfolio</span>{" "}
					</h1>
				</div>

				<p className='text-gray-300 md:text-gray-500 mt-3'>
					Hi Buddy! Welcome to my personal portfolio website <br />
					This is not final form, i will improve it later <br /> So, what are
					you for? Let's check this out!
				</p>
				<Button />
			</div>

			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
				<img
					src={robot}
					alt='billing'
					className='w-[100%] relative z-[5] brightness-[.4] md:brightness-100'
				/>

				<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
				<div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
			</div>
		</header>
	);
};

export default Hero;
