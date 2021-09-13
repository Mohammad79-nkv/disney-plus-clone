import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
      <div>
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt/>
                </a>
            </Wrap>
        </Carousel>
      </div>
  );
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition:opacity 0.2 ease 0s;
        }
    }
    ul li button{
        &:hover{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }

    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }

`

export default ImgSlider;
