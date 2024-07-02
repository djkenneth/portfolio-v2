import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import SiteAuthor from "./SiteAuthor";
import Link from "next/link";
const Footer = () => {
	return (
		<footer className="footer py-20 px-0">
			<div className="max-w-[1200px] mx-auto flex justify-between items-center flex-col md:flex-row">
				<div className="flex space-x-4 md:space-x-7 md:flex-row md:space-y-0">
					<Link href="https://github.com/akocero" passHref legacyBehavior>
						<a className="btn__link relative bg-[var(--bg-color-2)] size-20 rounded-full text-4xl flex justify-center items-center" target="__blank">
							<FiGithub className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
						</a>
					</Link>
					<Link href="https://gitlab.com/akocero" passHref legacyBehavior>
						<a className="tn__link relative bg-[var(--bg-color-2)] size-20 rounded-full text-4xl flex justify-center items-center" target="__blank">
							<FiGitlab className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
						</a>
					</Link>
					<Link href="https://www.linkedin.com/in/eugenebadato/" passHref legacyBehavior>
						<a className="btn__link relative bg-[var(--bg-color-2)] size-20 rounded-full text-4xl flex justify-center items-center" target="__blank">
							<FiLinkedin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
						</a>
					</Link>
					<Link href="https://twitter.com/eugenebadato" passHref legacyBehavior>
						<a className="btn__link relative bg-[var(--bg-color-2)] size-20 rounded-full text-4xl flex justify-center items-center" target="__blank">
							<FiTwitter className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
						</a>
					</Link>
				</div>

				<SiteAuthor />
			</div>
		</footer>
	);
};

export default Footer;
