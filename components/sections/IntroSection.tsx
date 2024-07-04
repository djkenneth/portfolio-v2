"use client"

import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	IntroSectionVariants,
	springRTL,
	springLTR,
	slideUp,
	fadeIn,
} from "../../src/utils/animationVariants";
import Button from "../Button";

export function IntroSection() {
	const one = (
		<h4 className="text-[2rem] font-[600] tracking-[0.6px] font-cascadia-code">
			Hello, they call me Kenneth.
		</h4>
	);
	const two = (
		<h1 className="text-[6.4rem] font-bold leading-[120%] tracking-[2px] text-shadow-[var(--text-shadow)] mb-[5rem] md:text-[7rem]">
			I <span className="text-[var(--accent)]">develop</span> things for the web.
		</h1>
	);

	const introTexts = [one, two];

	return (
		<motion.section
			className="intro"
			id="home"
			variants={IntroSectionVariants}
			initial="hidden"
			animate="visible"
		>
			{/* <div className="rectangle">&nbsp;</div> */}

			{/* <motion.div
				className="min-w-[280px] max-w-[280px] rotate-[-12deg] hidden md:block hover:rotate-0"
				variants={springLTR}
				whileHover={{
					rotateZ: "-20deg",
				}}
			>
				<Image
					src="/images/me.png"
					alt=""
					width={350}
					height={396}
					priority
					quality={100}
				/>
			</motion.div> */}
			<div className="flex-1">
				{introTexts.map((text, i) => (
					<motion.div variants={slideUp} key={i}>
						{text}
					</motion.div>
				))}

				<motion.div className="flex items-center gap-7" variants={slideUp}>
					<Button
						href="#projects"
						className="btn btn__primary"
						text="projects"
					/>

					<div className="flex gap-4">
						<Button
							href="https://github.com/djkenneth"
							className="btn btn__link"
							target="__blank"
							text={<FiGithub />}
						/>
						<Button
							href="https://www.linkedin.com/in/kenneth-ivan-pineda/"
							className="btn btn__link"
							target="__blank"
							text={<FiLinkedin />}
						/>
					</div>
				</motion.div>
			</div>

			{/* <motion.div
			className="triangle" 
			variants={fadeIn}>
				&nbsp;
			</motion.div>
			<motion.div 
			className="triangle2" 
			variants={fadeIn}>
				&nbsp;
			</motion.div> */}
		</motion.section>
	);
}
