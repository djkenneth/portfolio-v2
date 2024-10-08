import AboutSection from "../components/sections/AboutSection";
import ExperieceSection from "../components/sections/ExperieceSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import { IntroSection } from "../components/sections/IntroSection";
import ProjectSection from "../components/sections/ProjectSection";

export interface Project {
	title: string;
	subtitle: string;
	body: string;
	tools: string[];
	github: string;
	website: string;
	image?: Image;
}

export interface Image {
	url: string;
	title: string;
	width: number;
	height: number;
}

export interface Experieces {
	title: string;
	position: string;
	body: string;
}

const featuredProjects = [
	{
		title: 'Techno - Technology & IT Solutions',
		subtitle: 'Techno is a landing page',
		body: 'Techno is a modern and professional WordPress With Nextjs designed for technology and solution-based businesses.',
		tools: ['HTML', 'CSS', 'Wordpress Headless', 'Nextjs', 'GraphQL Apollo', 'Tailwind', 'Shadcn', 'Framer Motion'],
		github: 'https://github.com/djkenneth/wp-nextjs-techno',
		website: 'https://wp-nextjs-techno.vercel.app/',
		image: {
			url: '/images/projects/project-section-7.jpg',
			title: 'techno',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'Solute - Technology & IT Solutions',
		subtitle: 'Solute is a landing page',
		body: 'Solute is a modern and professional WordPress theme designed for technology and solution-based businesses.',
		tools: ['HTML', 'CSS', 'Wordpress', 'Shortcodes', 'ACF', 'Tailwind', 'Vanilla Javascript', 'JQuery'],
		github: '',
		website: 'https://dev-solute-kenneth.pantheonsite.io/',
		image: {
			url: '/images/projects/project-section-6.jpg',
			title: 'solute',
			width: 1980,
			height: 800
		}
	},
	// {
	// 	title: 'Casecobra E-commerce shop',
	// 	subtitle: 'E-Commerce Case shop',
	// 	body: 'CaseCobra - A Modern Fullstack E-Commerce Shop for Custom Phone Cases',
	// 	tools: ['Javascript', 'Next.js 14', 'TypeScript', 'Tailwind', 'Stripe', 'Kinde Auth'],
	// 	github: 'https://github.com/djkenneth/casecobra',
	// 	website: 'https://casecobra-gold.vercel.app',
	// 	image: {
	// 		url: '/images/projects/project-section-5.png',
	// 		title: 'phone-case-shop',
	// 		width: 1980,
	// 		height: 800
	// 	}
	// },
	{
		title: 'PC Link',
		subtitle: 'E-Commerce Game Tech Store',
		body: 'PC Link is a E-commerce website, a computer components store and my finals project in Human-Computer Interaction developed with Vuejs and Vuetify',
		tools: ['Javascript', 'Vuejs', 'Vuetify'],
		github: 'https://github.com/djkenneth/pclink-ecommerce',
		website: 'https://pclinkshop.netlify.app/',
		image: {
			url: '/images/projects/project-section-2.jpg',
			title: 'game-tech-store',
			width: 1980,
			height: 800
		}
	},
	{
		title: '~GameSpot~',
		subtitle: 'GameSpot is a landing page',
		body: 'GameSpot is a video gaming website using Vuejs and Vuetify',
		tools: ['Javascript', 'Vuejs', 'Vuetify'],
		github: 'https://github.com/djkenneth/gamespot-app',
		website: 'https://gamespot-app.netlify.app/',
		image: {
			url: '/images/projects/project-section-1.jpg',
			title: 'game-spot',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'RYX MOVIE APP',
		subtitle: 'Movie App',
		body: 'RXYMOVIE is a movie information website using Javascript, Vue.js, Vuetify, and TMDB API',
		tools: ['Javascript', 'Vuejs', 'Vuetify', 'TMDB API'],
		github: 'https://github.com/djkenneth/ryx-movie-app',
		website: 'https://github.com/djkenneth/ryx-movie-app',
		image: {
			url: '/images/projects/project-section-3.jpg',
			title: 'game-tech-store',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'Netflix Clone App',
		subtitle: 'Movie / Series App',
		body: 'A Netflix clone project is a web application using Reactjs/Nextjs, Typescript, Tailwind, Firebase, Stripe',
		tools: ['Javascript', 'Reactjs', 'Nextjs', 'Typescript', 'Tailwind', 'Firebase', 'Stripe'],
		github: 'https://github.com/djkenneth/netflix-clone-app',
		website: 'https://github.com/djkenneth/netflix-clone-app',
		image: {
			url: '/images/projects/project-section-4.png',
			title: 'game-tech-store',
			width: 1980,
			height: 800
		}
	},
]

const noteWorthyProjects = [
	{
		title: 'Techno - Technology & IT Solutions',
		subtitle: 'Techno is a landing page',
		body: 'Techno is a modern and professional WordPress With Nextjs designed for technology and solution-based businesses.',
		tools: ['HTML', 'CSS', 'Wordpress Headless', 'Nextjs', 'GraphQL Apollo', 'Tailwind', 'Shadcn', 'Framer Motion'],
		github: 'https://github.com/djkenneth/wp-nextjs-techno',
		website: 'https://wp-nextjs-techno.vercel.app/',
		image: {
			url: '/images/projects/project-section-7.jpg',
			title: 'techno',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'Solute - Technology & IT Solutions',
		subtitle: 'Solute is a landing page',
		body: 'Solute is a modern and professional WordPress theme designed for technology and solution-based businesses.',
		tools: ['HTML', 'CSS', 'Wordpress', 'Shortcodes', 'ACF', 'Tailwind', 'Vanilla Javascript', 'JQuery'],
		github: '',
		website: 'https://dev-solute-kenneth.pantheonsite.io/',
		image: {
			url: '/images/projects/project-section-6.jpg',
			title: 'solute',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'Casecobra E-commerce shop',
		subtitle: 'E-Commerce Case shop',
		body: 'CaseCobra - A Modern Fullstack E-Commerce Shop for Custom Phone Cases',
		tools: ['Javascript', 'Next.js 14', 'TypeScript', 'Tailwind', 'Stripe', 'Kinde Auth'],
		github: 'https://github.com/djkenneth/casecobra',
		website: 'https://casecobra-gold.vercel.app',
		image: {
			url: '/images/projects/project-section-5.png',
			title: 'phone-case-shop',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'PC Link',
		subtitle: 'E-Commerce Game Tech Store',
		body: 'PC Link is a E-commerce website, a computer components store and my finals project in Human-Computer Interaction developed with Vuejs and Vuetify',
		tools: ['Javascript', 'Vuejs', 'Vuetify'],
		github: 'https://github.com/djkenneth/pclink-ecommerce',
		website: 'https://pclinkshop.netlify.app/',
		image: {
			url: '/images/projects/project-section-2.jpg',
			title: 'game-tech-store',
			width: 1980,
			height: 800
		}
	},
	{
		title: '~GameSpot~',
		subtitle: 'GameSpot is a landing page',
		body: 'GameSpot is a video gaming website using Vuejs and Vuetify',
		tools: ['Javascript', 'Vuejs', 'Vuetify'],
		github: 'https://github.com/djkenneth/gamespot-app',
		website: 'https://gamespot-app.netlify.app/',
		image: {
			url: '/images/projects/project-section-1.jpg',
			title: 'game-spot',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'RYX MOVIE APP',
		subtitle: 'Movie App',
		body: 'RXYMOVIE is a movie information website using Javascript, Vue.js, Vuetify, and TMDB API',
		tools: ['Javascript', 'Vuejs', 'Vuetify', 'TMDB API'],
		github: 'https://github.com/djkenneth/ryx-movie-app',
		website: 'https://github.com/djkenneth/ryx-movie-app',
		image: {
			url: '/images/projects/project-section-3.jpg',
			title: 'game-tech-store',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'Netflix Clone App',
		subtitle: 'Movie / Series App',
		body: 'A Netflix clone project is a web application using Reactjs/Nextjs, Typescript, Tailwind, Firebase, Stripe',
		tools: ['Javascript', 'Reactjs', 'Nextjs', 'Typescript', 'Tailwind', 'Firebase', 'Stripe'],
		github: 'https://github.com/djkenneth/netflix-clone-app',
		website: 'https://github.com/djkenneth/netflix-clone-app',
		image: {
			url: '/images/projects/project-section-4.png',
			title: 'game-tech-store',
			width: 1980,
			height: 800
		}
	},
	{
		title: 'Food Delivery App',
		subtitle: 'Food Delivery App',
		body: 'A Food Delivery project is a web application using Reactjs, Nextjs, Typescript, Tailwind, Nestjs, Authentication',
		tools: ['Javascript', 'Reactjs', 'Nextjs', 'Typescript', 'Tailwind', 'Nestjs', 'Authentication'],
		github: 'https://github.com/djkenneth/food-delivery-webapp',
		website: '',
	},
]

const experieces = [
	{
		title: "adlkjaskldjas",
		position: "sdkfsdkjfksdjf",
		body: "sdlfjhsdjkhfkjhdsjk"
	}
]

export default function Page() {
	return (
		<>
			<IntroSection />
			<FeaturedSection projects={featuredProjects as Project[]} />
			<ProjectSection projects={noteWorthyProjects as Project[]} />
			{/* <ExperieceSection experieces={experieces as Experieces[]} /> */}
			<AboutSection />
		</>
	)

}