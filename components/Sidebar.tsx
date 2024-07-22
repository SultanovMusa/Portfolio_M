"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import { link } from "fs";
import Link from "next/link";
import Transition from "./Transition";

const Sidebar = () => {
	const [isRouting, setIsRouting] = useState(false);
	const [isActive, setIsActive] = useState("Home");
	const [prevPath, setPrevPath] = useState("/");

	const path = usePathname();

	useEffect(() => {
		if (prevPath !== path) {
			setIsRouting(true);
		}
	}, [path, prevPath]);

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path);
			const timeout = setTimeout(() => {
				setIsRouting(false);
			}, 1200);

			return () => clearTimeout(timeout);
		}
	}, [isRouting]);
	return (
		<div className="fixed   left-1/2 pt-3 top-[90%] z-[20] h-[48px] w-[200px] rounded-full bg-gray-500 bg-opacity-50">
			<AnimatePresence mode="wait">
				{isRouting && <Transition />}
				<div className="flex flex gap-5 pb-3 justify-center items-center h-full">
					{NavLinks.map((link) => (
						<Link
							key={link.name}
							href={link.link}
							onClick={() => setIsActive(link.name)}>
							<link.icon
								className={`w-[28px] h-[28px] ${
									isActive === link.name ? "text-sky-600" : "text-white"
								}`}
							/>
						</Link>
					))}
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Sidebar;
