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
		title: 'sdkfhjksdhfdsf',
		subtitle: 'sdkfhjksdhfdsf',
		body: 'sdkfhjksdhfdsf',
		tools: ['sdkfhjksdhfdsf', 'alskdhkjashd'],
		github: 'sdkfhjksdhfdsf',
		website: 'sdkfhjksdhfdsf',
		image: {
			url: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			title: 'asjdhjaksd',
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
            <ProjectSection projects={projects as Project[]} />
            <ExperieceSection experieces={experieces as Experieces[]} />
            <AboutSection />
        </>
    )

}