import ServiceSlider from "@/components/ServiceSlider";
import React from "react";

const Page = () => {
	return (
		<div className="bg-black">
			<div className="flex items-center  h-screen overflow-hidden">
				<div className=" md:pl-60 flex flex-col gap-3 pb-60 md:pb-0">
					<h1 className="text-[50px] text-white font-semibold animate-bounce">My Skills</h1>
					<p className="max-w-[350px] text-[16px] animate-pulse  text-blue-600">
						What skills do I know and perform to develop projects completely for
						you
					</p>
				</div>
				<ServiceSlider />
			</div>
		</div>
	);
};

export default Page;
