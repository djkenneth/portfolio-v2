import React from "react";
import { createClient } from "contentful";

import IntroSection from "../components/sections/IntroSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import ProjectSection from "../components/sections/ProjectSection";
import ExperieceSection from "../components/sections/ExperieceSection";

// export async function getStaticProps() {
// 	const client = createClient({
// 		space: process.env.CONTENTFUL_SPACE_ID,
// 		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// 	});

// 	const projects = await client.getEntries({
// 		content_type: "project",
// 		order: "fields.rank",
// 	});

// 	const experiences = await client.getEntries({
// 		content_type: "experiences",
// 		order: "fields.rank",
// 	});

// 	return {
// 		props: {
// 			projects: projects.items,
// 			experieces: experiences.items,
// 		},
// 		revalidate: 1,
// 	};
// }

const projects = [
	{
		title: 'sdkfhjksdhfdsf',
		subtitle: 'sdkfhjksdhfdsf',
		body: 'sdkfhjksdhfdsf',
		tools: ['sdkfhjksdhfdsf', 'alskdhkjashd'],
		github: 'sdkfhjksdhfdsf',
		website: 'sdkfhjksdhfdsf',
		image: {
			url: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			title: 'asjdhjaksd',
			width: '1980',
			height: '1020'
		}
	}
]

const experieces = [
	{
		title: 'adlkjaskldjas',
		position: 'sdkfsdkjfksdjf',
		body: 'sdlfjhsdjkhfkjhdsjk'
	}
]

export default function Home() {
	return (
		<>
			<IntroSection />

			<FeaturedSection projects={projects} />

			<ProjectSection projects={projects} />

			<ExperieceSection experieces={experieces} />

			<AboutSection />

			{/* <section className="testimonials">
				<SectionHeading
					title="testimonials"
					subtitle="people i work with?"
				/>
				<div className="testimonials__list">
					{[1, 2, 3, 4].map((project) => (
						<TestimonialItem key={project} />
					))}
				</div>
			</section> */}

			<ContactSection />
		</>
	);
}
