import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { projects } from '../../data/data';
import './Slider.scss';

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = projects.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <div className='slider-wrapper'>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <div className='buttons'>
        <button onClick={() => arrowRef.current.slickPrev()} className='back'>
          <WestIcon />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className='next'>
          <EastIcon />
        </button>
      </div>
    </div>
  )
}

export default SliderComp;