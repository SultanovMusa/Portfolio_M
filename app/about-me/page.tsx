// import ServiceSlider from "@/components/ServiceSlider";
import Image from "next/image";
import React from "react";

const Page = () => {
	return (
		<div className="bg-black">
			<div className="flex items-center  h-screen overflow-hidden">
				<div className="container">
					<div className=" flex  justify-around mt-5 ">
						<div className="  flex flex-col gap-3 pb-60 md:pb-0  text-center">
							<h1 className="text-[40px] text-white font-semibold text-center">
								About <span className="text-blue-800">Me</span>
							</h1>
							<p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
								Over the years, I have accumulated many skills that allow me to
								develop high-quality code, manage the state of the application
								and create adaptive interfaces My skills include developing web
								applications using the Rest API for data exchange, working with
								the Git version control system, creating components using the
								ReactJS library, ReactTs, as well as working with various
								frameworks and libraries such as Redux, Mobx, and RTK Query . I
								am also experienced in creating responsive interfaces using
								Tailwind CSS SASS, and Styled Components. In addition, I am familiar
								with tools that help in creating applications such as Docker,
								Firebase and Axios, which allows me to develop more scalable and
								faster applications. In general, I consider myself an
								experienced Frontend developer who is always ready to take on
								new challenges and learn new skills to create high-quality and
								innovative web applications.
							</p>
						</div>
						<Image
							className="max-w-[500px] w-[100%] h-[600px]"
							src="/assets/webdev.svg"
							alt="photo"
							priority={true}
							width={300}
							height={300}
						/>
					</div>
				</div>
				<div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-75">
					<Image
						src="/assets/bulb.png"
						alt="bulb"
						priority={true}
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
