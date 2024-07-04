'use client'

import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import Image from "next/image";

import Button from "../Button";

const AboutSection = () => {
	return (
		<section className="about" id="about">
			<div className="card about__content">
				<div className="card__actions">
					<Button
						href="https://github.com/akocero"
						className="btn btn__link"
						target="__blank"
						text={<FiGithub />}
					/>
					<Button
						href="https://gitlab.com/akocero"
						className="btn btn__link"
						target="__blank"
						text={<FiGitlab />}
					/>
					<Button
						href="https://www.linkedin.com/in/eugenebadato/"
						className="btn btn__link"
						target="__blank"
						text={<FiLinkedin />}
					/>
					<Button
						href="https://twitter.com/eugenebadato"
						className="btn btn__link"
						target="__blank"
						text={<FiTwitter />}
					/>
				</div>
				<div className="card__content">
					<h4 className="heading__2">about</h4>
					<h5 className="heading__5">
						what i love to do?
					</h5>

					<p className="card__body">
						{
							"I am Kenneth Ivan P. Pineda, a dedicated web developer with a passion for creating efficient and innovative solutions. With a background at Fullstack HQ from June 2021 to April 2024, I have honed my skills in converting UI/UX designs into fully functional websites using modern technologies such as JavaScript, React.js, Next.js, TypeScript, and various CMS platforms. My expertise extends to ensuring responsive design, cross-browser compatibility, and seamless integration with front-end and third-party services."
						}
						<br />
						<br />
						{
							"	I thrive in collaborative environments and am committed to continuous learning and improvement. My strengths lie in critical thinking, problem-solving, and adaptability, allowing me to handle tasks independently or as part of a team. I am motivated by the desire to contribute to both personal and organizational growth, leveraging my programming skills to drive success and create exceptional user experiences."
						}
					</p>
				</div>

				<div className="tags">
					<span className="tag">$coding</span>
					<span className="tag">$learning</span>
					<span className="tag">$goals</span>
				</div>
			</div>

			{/* <div className="about__gallery">
				<div className="about__thumbnail">
					<Image src="/images/about.jpg" alt="" layout="fill" />
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about2.jpg"
						alt=""
						width={450}
						height={600}
					/>
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about3.jpg"
						alt=""
						width={450}
						height={430}
					/>
				</div>
				<div className="about__thumbnail">
					<Image src="/images/about4.jpg" alt="" layout="fill" />
				</div>
			</div> */}
		</section>
	);
};

export default AboutSection;
