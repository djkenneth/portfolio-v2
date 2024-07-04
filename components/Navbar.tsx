"use client"

import Link from 'next/link';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { slideDown, navParentVariants } from '../src/utils/animationVariants';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [isDark, setIsDark] = useState('');
	let darkMode = '';

	const [lastScroll, setLastScroll] = useState(0);
	const [scrollState, setScrollState] = useState('');

	const navbarItems = [
		'#home',
		'#projects',
		'#experiences',
		'#about',
		'#contact',
	];

	useEffect(() => {
		// setIsDark(localStorage.getItem("darkmode"));
		darkMode = localStorage.getItem('darkmode') as string;
		darkMode == 'light' ? enableDarkMode() : disableDarkMode();
	}, []);

	useEffect(() => {
		const onScroll = (e: any) => {
			const currentScroll = window.pageYOffset;

			if (currentScroll > lastScroll) {
				setScrollState('top-[-100%]');
			}

			if (currentScroll < lastScroll) {
				setScrollState('h-[6.4rem] shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)]');
			}

			if (currentScroll <= 0) {
				setScrollState('');
			}

			setLastScroll(currentScroll);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollState, lastScroll]);

	const enableDarkMode = () => {
		document.body.classList.add('dark');
		const body = document.querySelector('.dark') as Element;
		body.setAttribute('class', 'dark');

		localStorage.setItem('darkmode', 'dark');
		setIsDark('dark');
	};

	const disableDarkMode = () => {
		document.body.classList.add('light');
		const body = document.querySelector('.light') as Element;
		body.setAttribute('class', 'light');

		localStorage.setItem('darkmode', 'light');
		setIsDark('light');
	};

	const toggleDarkMode = () => {
		darkMode = localStorage.getItem('darkmode') as string;

		if (darkMode === 'dark') {
			disableDarkMode();
		} else {
			enableDarkMode();
		}
	};

	return (
		<header className={`navbar ${scrollState} fixed top-0 left-0 w-full z-50 backdrop-blur h-[9.2rem] ease-in-out duration-300`}>
			<motion.div
				className="navbar__container relative max-w-[1200px] flex my-0 mx-auto items-center h-full text-[1.6rem] font-light tracking-[0.6px] backdrop-blur-[100px]"
				variants={navParentVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="ml-[3.2rem] md:ml-0" variants={slideDown}>
					<Link href="/" passHref legacyBehavior>
						<a>@KennethPineda.</a>
					</Link>
				</motion.div>
				<nav className="ml-auto">
					<ul className="hidden md:flex">
						{navbarItems.map((item) => (
							<motion.li
								className="ml-[2.4rem]"
								variants={slideDown}
								key={item}
							>
								<Link href={item} passHref legacyBehavior>
									<a className="hover:text-[#00e673]">
										{item.substring(1)}
									</a>
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
				<motion.button
					className="border-0 bg-transparent text-[#00331a] font-[2.6rem] cursor-pointer flex items-center ml-[2.4rem]"
					onClick={() => {
						toggleDarkMode();
					}}
					variants={slideDown}
				>
					{isDark == 'dark' ? <RiSunLine /> : <RiMoonClearLine />}
				</motion.button>
			</motion.div>
		</header>
	);
};

export default Navbar;
