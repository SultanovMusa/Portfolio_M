
import ProfileShape from "@/components/ProfileShape";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="container">
				<main className="flex items-center h-screen relative">
					<div className="container">
						<div className="absolute  bottom-0 ">
							<ProfileShape />
						</div>
						<div className="flex flex-col gap-3 z-[10]  pt-20">
							<h1 className="text-[50px] text-white max-w-[500px]">
								Mustafa Sultanov
							</h1>
							<p className="text-slate-50 animate-bounce	 text-2xl">I am Front-end developer</p>
							<p className="text-sky-600  animate-pulse	 text-1xl">
								Here you will find my projects
								<br />
								and experience in frontend <br />
								development. I invite you to <br />
								explore my work and learn more <br />
								about my professional journey.
							</p>
							<div className="relative w-[100px] top-11 h-[100px] md:w-[160px] md:h-[160px] mt-5">
								<Image
									src="/assets/image.png"
									alt="projects"
									width={160}
									height={160}
									priority={true}
									className="slow-spin top-10"
								/>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
