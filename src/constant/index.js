import { ecommerce, contactapp, calc } from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "technologies",
		title: "Technologies",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export const about = [
	{
		id: "feature-1",
		title: "Front-End Developer",
		content:
			"I like code to make a stunning website, That's why i'm Front-End Dev",
	},
	{
		id: "feature-2",
		title: "Good in english",
		content:
			"I'm quite good in english although english is my second languange.",
	},
	{
		id: "feature-3",
		title: "Able to work in team",
		content: "I have a lot experience on working as a team since highschool.",
	},
];

export const projects = [
	{
		id: "projects-1",
		img: ecommerce,
		title: "E-Commerce",
		tech: ["NextJS", "Sanity", "Stripe"],
		desc: "Simple E-commerce that apply sanity as backend database handler with Stripe as payment gateway",
	},
	{
		id: "projects-2",
		img: contactapp,
		title: "Contact Manager",
		tech: ["ReactJS", "Bootstrap", "Axios"],
		desc: "Simple Contact App allows you to create, update, delete contact easil with CRUD Axios",
	},
	{
		id: "projects-3",
		img: calc,
		title: "Calculator",
		tech: ["ReactJS", "Basic Logic", "Tailwind"],
		desc: "Just Calculator that helps you to compute number, you can do addition, divide, times, minus, and many more",
	},
];
