import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ href, className, text, target }: any) {
	return (
		<Link href={href} passHref legacyBehavior>
			<motion.a
				href={href}
				className={className}
				target={target}
				whileHover={{
					scale: 1.1,
					y: -2,
				}}
			>
				{text}
			</motion.a>
		</Link>
	);
}
