// import ServiceSlider from "@/components/ServiceSlider";
import Image from "next/image";
import React from "react";

const Page = () => {
	return (
		<div className="bg-[#0C011A]">
			<div className="flex items-center  h-screen overflow-hidden">
				<div className="container">
					<div className=" flex  justify-around ">
						<div className="  flex flex-col gap-3 pb-60 md:pb-0  text-center">
							<h1 className="text-[40px] text-white font-semibold text-center">
								About <span className="text-blue-800">Me</span>
							</h1>
							<p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
							</p>
						</div>
						<Image
							className="max-w-[500px] w-[100%] h-[500px]"
							src="/assets/webdev.svg"
							alt="photo"
							width={300}
							height={300}
						/>
					</div>
				</div>
				<div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-75">
					<Image
						src="/assets/bulb.png"
						alt="bulb"
						width={260}
						height={260}
						className="w-full h-full hidden md:block"
					/>
				</div>
			</div>
		</div>
	);
};

export default Page;
