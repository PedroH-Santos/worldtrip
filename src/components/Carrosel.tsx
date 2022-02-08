import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from "../components/Slide";
import  { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export function Carrosel() {
    return (
        <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        >
  

            <SwiperSlide style={{ width: '1440px' }}> <Slide title="Europa" subtitle="O continente mais antigo" image="europa.jpg" />  </SwiperSlide>
            <SwiperSlide style={{ width: '1440px' }}> <Slide title="América do sul " subtitle="O continente mais rico" image="americasul.jpg" /> </SwiperSlide>
            <SwiperSlide style={{ width: '1440px' }}><Slide title="América do Norte" subtitle="O continente mais valorizado" image="americanorte.jpg" /> </SwiperSlide>
            <SwiperSlide style={{ width: '1440px' }}> <Slide title="Asia" subtitle="O continente mais cultural" image="asia.jpg" /> </SwiperSlide>
            <SwiperSlide style={{ width: '1440px' }}> <Slide title="África" subtitle="O continente mais diverso" image="africa.jpg" /> </SwiperSlide>
        </Swiper>
    )
}