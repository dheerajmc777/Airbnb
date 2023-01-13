import React from 'react';
import "./style.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({card}) {
  return (
    <div className="card-box">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="Imgsrc" className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-into-flex">
        <h3 className="card-title">{card.title}</h3><div className="card-rating"><StarRateIcon/><p>{card.rating}</p></div>  
      </div>
      <p style={{margin: 0, color:"var(--grey)"}}>{card.desc}</p>
      <p style={{margin: 0, color:"var(--grey)"}}> {card.date}</p>
      <p style={{margin: "0.2rem", fontSize:"1rem", color:"var(--black)"}}> 
        <span style={{ fontWeight:"600"}}>₹{card.price}</span>night
      </p>
    </div>
  );
}

export default Card;
