import React from "react";
import { profile } from "../assets";
import { about } from "../constant/index";
import styles, { layout } from "../style";

const AboutCard = ({ icon, title, content, index }) => {
	return (
		<div
			className={`flex flex-row p-6 rounded-[20px] ${
				index !== about.length - 1 ? "mb-6" : "mb-0"
			} feature-card w-full md:w-[700px]`}>
			<div className='flex flex-1 flex-col ml-3'>
				<h4 className='font-semibold text-white text-[18px] leading-[23px] mb-1 '>
					{title}
				</h4>

				<p className='font-normal text-gray-200 text-[18px] leading-[24`px] mb-1'>
					{content}
				</p>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<section id='about'>
			<div className=''>
				<div className='w-32 h-2 bg-cyan-700 rounded-xl'></div>
				<h2 className={`${styles.heading2}`}>About</h2>
			</div>

			<div className={`flex flex-col items-center justify-between md:flex-row`}>
				<div className={`${styles.paddingY} ${layout.sectionInfo}`}>
					<img
						src={profile}
						alt='profileImg'
						width={350}
						className='rounded-xl drop-shadow-md'
					/>
				</div>

				<div className=''>
					<h2 className={`${styles.heading2} text-gradient text-center mb-7`}>
						Muhamad Izra Novan
					</h2>

					<div className={`${layout.sectionImg} flex-col`}>
						{about.map((item, index) => (
							<AboutCard
								key={item.id}
								{...item}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
