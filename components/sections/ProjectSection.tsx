'use client'

import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import ProjectItem from "../ProjectItem";

import { Project } from "../../app/page";
export default function ProjectSection({ projects }: { projects: Project[] }) {
	const [ref, controls] = useAnimateWhenViewed(-250);
	return (
		<motion.section
			className="project"
			id="projects"
			variants={sectionVariants}
			initial="hidden"
			animate={controls as any}
			ref={ref as any}
		>
			<SectionHeading
				title="noteworthy projects"
				subtitle="what i'm capable of?"
			/>

			<div className="card__list">
				{projects.map((project: Project, index: number) => (
					<ProjectItem project={project} key={index.toString()} />
				))}
			</div>
		</motion.section>
	);
}
