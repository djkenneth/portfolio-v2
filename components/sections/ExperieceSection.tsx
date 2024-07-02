'use client'

import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import ExperienceItem from "../ExperienceItem";

import { Experieces } from "../../app/page";

export default function ExperieceSection({ experieces }: { experieces: Experieces[] }) {
	const [ref, controls] = useAnimateWhenViewed(-250);
	return (
		<motion.section
			className="experience"
			id="experiences"
			variants={sectionVariants}
			initial="hidden"
			animate={controls as any}
			ref={ref as any}
		>
			<SectionHeading title="experiences" subtitle="what i have done?" />

			<div className="experience__list">
				{experieces.map((experiece, index) => (
					<ExperienceItem
						key={index.toString()}
						experiece={experiece}
					/>
				))}
			</div>
		</motion.section>
	);
}
