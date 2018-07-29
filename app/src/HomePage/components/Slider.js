/**
 * SliderWrapper
 */

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import UnderConstructionImage from 'assets/images/under-construction.jpg';

const OuterDiv = styled.div`
  position: relative;
  min-height: 300px;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  margin: auto;
  max-height: 100%;
`;
/* eslint-disable react/prefer-stateless-function */
export default function SliderWrapper(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <OuterDiv>
        <Image
          alt="The site is under construction"
          src={UnderConstructionImage}
        />
      </OuterDiv>
      <OuterDiv>
        <Image
          alt="The site is under construction"
          src={UnderConstructionImage}
        />
      </OuterDiv>
      <OuterDiv>
        <Image
          alt="The site is under construction"
          src={UnderConstructionImage}
        />
      </OuterDiv>
      <OuterDiv>
        <Image
          alt="The site is under construction"
          src={UnderConstructionImage}
        />
      </OuterDiv>
    </Slider>
  );
}
