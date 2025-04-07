import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Card from "../components/Card";
import PythonLogo from "../assets/PythonLogo.png";

function Skills() {
    return (
        <>
        <div id="Skills" className="relative h-[100vh] w-full bg-palette6 flex items-center justify-center overflow-hidden pt-16">
            <h1 className="absolute top-[.5vw] text-[10vh] font-mona font-bold text-white z-50 mt-10 rounded-sm px-2"
            style={{ textShadow: '0 0 3px #fff' }}>
                My Skills
            </h1>

            <h2 className="absolute text-center font-mona lg:text-[30vw] text-[75vw] text-white italic opacity-5 whitespace-nowrap select-none">
                Expertise
            </h2>

            <div className="relative z-20 w-full">
                <Swiper
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={1.3}
                    loop={false}
                    navigation
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 50,
                        depth: 200,
                        slideShadows: false
                    }}
                    className="swiper-container h</SwiperSlide>-[100vh] items-center"
                >
                    <SwiperSlide className="ghost-slide my-10">
                        <Card color="#F88166" title="Engineering Fundamentals" description="Understanding core engineering principles." image={PythonLogo} />
                    </SwiperSlide>
                    <SwiperSlide className="ghost-slide my-10">
                        <Card color="#4A90E2" title="Software Development" description="Building efficient software solutions." image={PythonLogo} />
                    </SwiperSlide>
                    <SwiperSlide className="ghost-slide my-10">
                        <Card color="#50C878" title="Embedded Systems" description="Integration of software and hardware." image={PythonLogo} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </>
    );
}

export default Skills;