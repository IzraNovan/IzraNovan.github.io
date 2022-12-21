import styles from "./style";
import {
	Navbar,
	Hero,
	About,
	Projects,
	Stacks,
	Footer,
	Contact,
} from "./components";

const App = () => {
	// Saya langsung belajar best practice penerapan tailwind yang efektif dengan cara
	// setting css default versi saya di tailwind.config dan menyatukan css tailwind yang penerapannya satu paket ke dalam file style.js

	return (
		<section className='bg-slate-900 w-full overflow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-slate-900 ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-slate-900 ${styles.paddingX}  ${styles.flexStart}`}>
				<main className={`${styles.boxWidth}`}>
					<About /> <Projects /> <Stacks /> <Contact />
				</main>
			</div>

			<div className={`bg-slate-900 ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Footer />
				</div>
			</div>
		</section>
	);
};

export default App;
