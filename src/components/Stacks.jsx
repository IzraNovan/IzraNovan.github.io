import React from "react";
import styles from "../style.js";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Stacks = () => {
	const skills = [
		{
			logo: <IoLogoJavascript />,
			border: "border-yellow-400",
			color: "text-yellow-400",
			title: "Javascript",
		},
		{
			logo: <FaGitAlt />,
			border: "border-orange-600",
			color: "text-orange-600",
			title: "Git",
		},
		{
			logo: <IoLogoReact />,
			border: "border-cyan-600",
			color: `text-cyan-600`,
			title: "ReactJS",
		},
		{
			logo: <SiNextdotjs />,
			border: "border-white",
			color: "text-white",
			title: "NextJS",
		},
		{
			logo: <IoLogoSass />,
			border: "border-pink-600",
			color: "text-pink-600",
			title: "Sass",
		},
		{
			logo: <FaBootstrap />,
			border: "border-purple-600",
			color: "text-purple-600",
			title: "Bootstrap",
		},
		{
			logo: <SiTailwindcss />,
			border: "border-blue-400",
			color: "text-blue-400",
			title: "Tailwind",
		},
	];

	return (
		<section
			className='mt-20'
			id='technologies'>
			<div>
				<div className='w-32 h-2 bg-cyan-700 rounded-xl'></div>
				<h2 className={`${styles.heading2}`}>Stacks</h2>
			</div>

			<div className='mt-12 flex flex-wrap items-center justify-center gap-8 p-4 md:gap-10'>
				{skills?.map((skill, i) => (
					<div
						key={i}
						className={`group w-16 sm:w-60 h-16 sm:h-60 transform rounded-xl border-2 bg-gray-900 p-9 transition duration-500 hover:scale-110 md:p-10 ${skill.border} flex justify-center items-center`}>
						<div
							className={`${skill.color} flex flex-col h-1 w-1 items-center justify-center rounded-full bg-gray-900 text-9xl`}>
							<p className='text-4xl sm:text-9xl'>{skill.logo}</p>
							<p className='text-[12px] sm:text-2xl font-normal mt-2 md:mt-5'>
								{skill.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Stacks;
