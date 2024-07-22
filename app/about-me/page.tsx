import ServiceSlider from "@/components/ServiceSlider";
import Image from "next/image";
import React from "react";

const Page = () => {
	return (
		<div className="bg-[#0C011A]">
			{/* <div className="container"> */}
				<div className="flex items-center  h-screen overflow-hidden">
					<div className=" md:pl-60 flex flex-col gap-3 pb-60 md:pb-0">
						<h1 className="text-[50px] text-white font-semibold">My Skills</h1>
						<p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
					<div className="absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75">
						<Image
							src="/assets/bulb.png"
							alt="bulb"
							width={260}
							height={260}
							className="w-full h-full hidden md:block"
						/>
					</div>
					<ServiceSlider />
				</div>
			</div>
		// </div>
	);
};

export default Page;
