'use client'

import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import FeaturedItem from "../FeaturedItem";

import { Project } from "../../app/page";

export default function FeaturedSection({ projects }: { projects: Project[] }) {
	const [ref, controls] = useAnimateWhenViewed(-250);
	return (
		<motion.section
			className="featured"
			id="featured"
			variants={sectionVariants}
			initial="hidden"
			animate={controls as any}
			ref={ref as any}
		>
			<SectionHeading
				title="featured projects"
				subtitle="selected projects"
			/>
			{projects && projects
				// .filter((project) => project.fields.featured)
				.map((featuredProject: Project, index: number) => (
					<FeaturedItem
						key={index.toString()}
						featuredProject={featuredProject as Project}
					/>
				))}
		</motion.section>
	);
}
