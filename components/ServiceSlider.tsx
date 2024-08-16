"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";

const ServiceSlider = () => {
	return (
		<div className="container">
			<div className="absolute bottom-0 md:bottom-40 md:right-30 w-[60%] md:w-[55%]">
				<Swiper
					breakpoints={{
						340: {
							slidesPerView: 1,
							spaceBetween: 15,
						},
						700: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
					}}
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}>
					{ServiceData.map((item) => (
						<SwiperSlide key={item.title}>
							<div className="rounded-md cursor-pointer mb-10 group relative text-white shadow-lg rounde-xl px-6 py-8 h-[300px] w-[250px] overflow-hidden">
								<div
									className="absolute inset-0 bg-cover bg-center"
									style={{ backgroundImage: `url(${item.backgroundImage})` }}
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
								<div className="relative flex flex-col items-center justify-center gap-3">
									<item.icon className="text-blue-600  group-hover:text-blue-400 w-[120px] h-[120px] items-center" />
									<h1 className="text-xl lg:text-2xl text-center  place-items-center  justify-items-center">{item.title}</h1>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ServiceSlider;
