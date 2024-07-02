import React from "react";
import list from "../Data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function FBooks() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide:2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
     
    ],
  };

  const filterData = list.filter((itm) => itm.category === "free");

  return (
    <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4  dark:bg-slate-900 dark:text-white ">
      <h1 className="font-semibold text-xl pb-2 text-red-200">Free Items</h1>
      <div className="mb-20 p-10 max-h-50">
      <Slider {...settings}>
        
        {filterData.map((item) => (
          <Card item={item} key={item.id} />
          ))}
      </Slider>
        </div>
    </div>
  );
}

export default FBooks;
