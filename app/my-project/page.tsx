const Page = () => {
	return (
		<div className="relative h-screen bg-black]">
			<div className="pt-[90px] overflow-y-auto h-full ">
				<div className="container">
					<h1 className="text-white text-6xl text-center mb-10">My Projects</h1>
					<div className="space-y-8">
						<div className="flex items-center justify-between h-[400px]   rounded-lg shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] transition-shadow duration-300 ease-in-out">
							<div className="flex text-white flex-col text-center">
								<div>
									<h1>LMS</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Magnam <br /> animi, dolores fugit numquam quae minima.
										Magnam <br /> animi, dolores fugit numquam quae minima.
										Magnam <br /> animi, dolores fugit numquam quae minima.
									</p>
								</div>
								<div>
									<button>TypeScript</button>
									<button>Redux</button>
									<button>Vite</button>
									<button>RTQ</button>
									<button>Antd</button>
									<button>React Router</button>
									<button>Sass</button>
									<button>React-hook-form</button>
								</div>
							</div>
							<div></div>
						</div>
						<div className="flex items-center justify-center  h-[400px]      rounded-lg shadow-[0px_4px_20px_rgba(0,0,255,0.3)] hover:shadow-[0px_4px_20px_rgba(0,0,255,0.6)] transition-shadow duration-300 ease-in-out">
							<h2 className="text-white text-3xl">Project 2: Mustafa</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
