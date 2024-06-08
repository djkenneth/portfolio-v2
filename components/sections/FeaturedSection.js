import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import FeaturedItem from "../FeaturedItem";
export default function FeaturedSection({ projects }) {
	const [ref, controls] = useAnimateWhenViewed(-250);
	return (
		<motion.section
			className="featured"
			id="featured"
			variants={sectionVariants}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<SectionHeading
				title="featured projects"
				subtitle="selected projects"
			/>
			{projects
				// .filter((project) => project.fields.featured)
				.map((featuredProject, index) => (
					<FeaturedItem
						featuredProject={featuredProject}
						key={index.toString()}
					/>
				))}
		</motion.section>
	);
}
