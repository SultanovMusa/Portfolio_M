import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import AnimatedNumbers from "./AnimatedNumbers";
// import AnimatedNumbers from "./AnimatedNumbers";

const Navbar = () => {
	return (
		<div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5">
			<h1 className="text-white text-[40px] font-mono">
				SMZ
				<span className="text-sky-600"> <AnimatedNumbers value={2005}/></span>
			</h1>
			<div className="flex flex-row gap-5">
				<Link href="https://github.com/SultanovMusa">
					<BsGithub className="w-8 h-8" color="white" />
				</Link>

				<Link href="https://www.instagram.com/sultanov_11_/">
					<PiInstagramLogoBold className="w-8 h-8" color="white" />
				</Link>
				<Link href="https://t.me/Mufa_Sultanov">
					<BsTelegram className="w-8 h-8" color="white" />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
