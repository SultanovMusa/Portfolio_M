import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";

interface Project {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveDemoUrl: string;
	imageSrc: string;
}

const projects: Project[] = [
	{
		title: "LMS",
		description: `LMS is a learning management system. It is 
		a platform for managing online and offline training courses.`,
		techStack: [
			"TypeScript",
			"Redux",
			"RTQ",
			"React Router",
			"Sass",
			"RestApi",
		],
		githubUrl: "https://github.com/SultanovMusa/lms",
		liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
		imageSrc: "/assets/i.webp",
	},
	{
		title: "Peak-Space",
		description: `Streamlining Social Interaction: Simplifying 
		the process of connecting with friends and 
		discovering new content through real-time 
		updates, optimizing user engagement and 
		interaction.`,
		techStack: [
			"TypeScript",
			"Redux",
			"RTQ",
			"React Router",
			"Sass",
			"RestApi",
		],
		githubUrl: "https://github.com/SultanovMusa/Peak-Space",
		liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
		imageSrc: "/assets/peakSpace.png",
	},
];

const Page = () => {
	return (
		<div className="relative h-screen bg-black">
			<div className="pt-[100px] overflow-y-auto h-full">
				<div className="container">
					<h1 className="text-white text-6xl text-center">My Projects</h1>
					<div className="space-y-8 mb-10 mt-5 flex flex-col">
						{projects.map((project, index) => (
							<div
								key={index}
								className={`flex items-center justify-between h-[420px] rounded-lg shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] transition-shadow duration-300 ease-in-out p-3 ${
									index % 2 === 0 ? "flex-row" : "flex-row-reverse"
								}`}>
								<div className="flex text-white flex-col text-center gap-10">
									<div className="flex flex-col p-5">
										<h1 className="text-3xl">{project.title}</h1>
										<p className="w-[390px]">{project.description}</p>
									</div>
									<div className="flex gap-5 items-center justify-center flex-col">
										<div className="flex gap-5">
											{project.techStack.slice(0, 3).map((tech, i) => (
												<button
													key={i}
													className="w-[100px] h-[50px] bg-[rgba(0,0,255,0.5)]">
													{tech}
												</button>
											))}
										</div>
										<div className="flex gap-5">
											{project.techStack.slice(3).map((tech, i) => (
												<button
													key={i}
													className="w-[100px] h-[50px] bg-[rgba(0,0,255,0.5)]">
													{tech}
												</button>
											))}
										</div>
									</div>
									<div className="flex items-center justify-around gap-7">
										<div className="flex gap-3 items-center justify-center cursor-pointer">
											<a
												href={project.githubUrl}
												className="text-white text-xl hover:text-blue-500 transition-colors duration-300">
												Code
											</a>
											<FaGithub className="hover:text-blue-500 transition-colors duration-300" />
										</div>
										<div className="flex gap-3 items-center justify-center cursor-pointer">
											<a
												href={project.liveDemoUrl}
												className="text-white hover:text-blue-500 transition-colors duration-300">
												Live Demo
											</a>
											<FaArrowUpRightFromSquare className="hover:text-blue-500 transition-colors duration-300" />
										</div>
									</div>
								</div>
								<div>
									<Image
										className="rounded-xl bg-white"
										src={project.imageSrc}
										alt="project image"
										priority={true}
										width={650}
										height={500}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
