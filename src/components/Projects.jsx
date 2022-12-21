import React from "react";
import styles from "../style";
import { projects } from "../constant";

const ProjectCard = ({ id, img, title, tech, desc }) => {
	return (
		<div className='w-[80%] sm:w-[350px] p-4 flex flex-col feature-card rounded-xl mt-14 text-gray-200'>
			<div>
				<img
					src={img}
					alt='test'
					className='rounded-xl w-full md:w-[330px]'
					width={330}
				/>
			</div>

			<div className='mt-3'>
				<h3 className='text-[20px] font-semibold'>{title}</h3>
				<p>Tech: {tech.join(", ")}</p>
				<p className='mt-3 text-gray-200'>Desc: {desc}</p>
			</div>

			<div className='flex justify-around mt-10'>
				<p>Run</p>
				<p>Code</p>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<section className='mt-16'>
			<div className=''>
				<div className='w-32 h-2 bg-cyan-700 rounded-xl'></div>
				<h2 className={`${styles.heading2}`}>Projects</h2>
			</div>

			<div
				id='projects'
				className=''>
				<div className='flex flex-col md:flex-row justify-around items-center gap-1 md:gap-10'>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.id}
							{...project}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
