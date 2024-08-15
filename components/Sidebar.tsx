"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { NavLinks } from "@/constants";
import Transition from "./Transition";

const Sidebar = () => {
	const [isRouting, setIsRouting] = useState(false);
	const [isActive, setIsActive] = useState("/");
	const [prevPath, setPrevPath] = useState("/");

	const path = usePathname();

	const router = useRouter();

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
		<div className="fixed   left-[45%] pt-3 top-[90%] z-[20] h-[48px] w-[250px] rounded-full bg-[#01060f] shadow-[2px_6px_10px_rgba(0,0,255,0.5)]">
			<AnimatePresence mode="wait">
				{isRouting && <Transition />}
				<div className="flex flex gap-5 pb-3 justify-center items-center h-full ">
					{NavLinks.map((link) => (
						<div
							key={link.name}
							onClick={() => {
								setIsActive(link.name);
								router.push(link.link);
							}}>
							<link.icon
								className={`w-[28px] h-[28px] cursor-pointer ${
									isActive === link.name ? "text-blue-800" : "text-white"
								}`}
							/>
						</div>
					))}
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Sidebar;
