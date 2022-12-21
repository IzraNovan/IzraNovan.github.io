import React from "react";
import styles from "../style";
import {
	AiOutlineWhatsApp,
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiFillLinkedin,
	AiFillFacebook,
} from "react-icons/ai";

const Contact = () => {
	return (
		<section className='mt-20'>
			<div className=''>
				<div className='w-32 h-2 bg-cyan-700 rounded-xl'></div>
				<h2 className={`${styles.heading2}`}>Contact me</h2>
				<p></p>
			</div>

			<div className='flex flex-col justify-center items-center mt-16'>
				<form className='flex flex-col md:w-1/2 w-[80%] justify-center items-center'>
					<div className='w-full mt-3'>
						<label
							htmlFor='website-admin'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
							Username
						</label>
						<div className='flex w-full'>
							<span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
								@
							</span>
							<input
								type='text'
								id='website-admin'
								className='rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='John Doe'
							/>
						</div>
					</div>

					<div className='w-full mt-3 '>
						<label
							htmlFor='email-address-icon'
							className=' text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
							Your Email
						</label>
						<div className='relative w-full'>
							<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-gray-500 dark:text-gray-400'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
								</svg>
							</div>
							<input
								type='text'
								id='email-address-icon'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='name@gmail.com'
							/>
						</div>
					</div>

					<div className='w-full mt-3'>
						<label
							htmlFor='message'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left'>
							Your message
						</label>
						<textarea
							id='message'
							rows='4'
							className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Leave a comment...'></textarea>
					</div>

					<button
						type='button'
						className='w-full rounded-xl p-3 text-gray-200 border mt-10'>
						Send
					</button>
				</form>
			</div>

			<div className='flex flex-col flex-wrap w-full justify-center items-center text-white mt-10'>
				<h3>Or Follow me on</h3>
				<div className='flex flex-row flex-wrap justify-center items-center gap-10 text-4xl md:text-6xl mt-5'>
					<AiOutlineWhatsApp />
					<AiOutlineGithub />
					<AiOutlineInstagram />
					<AiOutlineTwitter />
					<AiFillLinkedin />
					<AiFillFacebook />
				</div>
			</div>
		</section>
	);
};

export default Contact;
