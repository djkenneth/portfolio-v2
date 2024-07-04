import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

import { motion } from "framer-motion";
import { slideUp } from "../src/utils/animationVariants";
import Button from "./Button";

import { Project } from "../app/page";

const FeaturedItem = ({ featuredProject }: { featuredProject: Project }) => {
	const { title, subtitle, body, tools, github, website, image } =
		featuredProject;

	return (
		<motion.article className="featured__item" variants={slideUp}>
			<div className="featured__img-container">
				{image && (
					<Image
						src={image.url}
						alt={title}
						width={image.width}
						height={image.height}
					/>
				)}
			</div>
				<div className="featured__content">
					<h2 className="heading__2 mb-7 mt-7 md:mt-0">{title}</h2>
					<h5 className="heading__5 mb-7">{subtitle}</h5>
					<p className="mb-7">{body}</p>

					<div className="tags">
						{tools.map((tag) => (
							<span key={tag} className="tag">
								{tag}
							</span>
						))}
					</div>

					<div className="featured__actions">
						<Button
							href={website}
							target="__blank"
							className="btn btn__primary"
							text="take a look"
						/>
						<Button
							href={github}
							target="__blank"
							className="btn btn__link"
							text={<FiGithub />}
						/>
					</div>
				</div>
		</motion.article>
	);
};

export default FeaturedItem;
