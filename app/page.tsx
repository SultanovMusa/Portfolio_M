import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" bg-cover bg-center  bg-[url('/assets/projects/SpaceCity1.jpg')]">
			<div className="container">
				<main className="flex items-center h-screen relative">
					<div className="container">
						<div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
							<Particle />
						</div>

						<div className="flex flex-col gap-3 z-[10]  pt-20">
							<h1 className="text-[50px] text-white max-w-[500px]">
								Mustafa Sultanov
							</h1>
							<p className="text-sky-600	 text-2xl">I am Front-end developer</p>

							<div className="relative w-[100px] top-11 h-[100px] md:w-[160px] md:h-[160px] mt-5">
								<Image
									src="/assets/rounded-text.png"
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
