import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

import AnimatedNumbers from "./ui/AnimatedNumbers";
import Image from "next/image";

const Header = () => {
	return (
		<div className="fixed top-0 bg-[#01060f] shadow-[0px_4px_10px_rgba(0,0,255,0.5)] z-[20] w-full flex  gap-5 md:justify-between md:px-60 pi-5 ">
			<div className="flex text-center items-center gap-3 ">
				<Image src="/assets/smzlogo.jpg" alt="photo" width={80} height={80}  />
				<span className="text-white text-4xl ">
					<AnimatedNumbers value={2005} />
				</span>
			</div>

			<div className="flex flex-row gap-5 items-center">
				<Link href="https://github.com/SultanovMusa">
					<BsGithub className="w-8 h-8 text-white hover:text-blue-500 animate-pulse" />
				</Link>

				<Link href="https://www.instagram.com/sultanov_11_/">
					<PiInstagramLogoBold className="w-8 h-8 text-white hover:text-blue-500 animate-pulse" />
				</Link>
				<Link href="https://t.me/Mufa_Sultanov">
					<BsTelegram className="w-8 h-8 text-white hover:text-blue-500 animate-pulse " />
				</Link>
			</div>
		</div>
	);
};

export default Header;
