import AboutSection from "../components/sections/AboutSection";
import ExperieceSection from "../components/sections/ExperieceSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import { IntroSection } from "../components/sections/IntroSection";
import ProjectSection from "../components/sections/ProjectSection";

export interface Project {
    title:    string;
    subtitle: string;
    body:     string;
    tools:    string[];
    github:   string;
    website:  string;
    image:    Image;
}

export interface Image {
    url:    string;
    title:  string;
    width:  number;
    height: number;
}

export interface Experieces {
    title:    string;
    position: string;
    body:     string;
}

const projects = [
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
	}
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
            <FeaturedSection projects={projects as Project[]} />
            {/* <ProjectSection projects={projects as Project[]} /> */}
            {/* <ExperieceSection experieces={experieces as Experieces[]} /> */}
            <AboutSection />
        </>
    )

}