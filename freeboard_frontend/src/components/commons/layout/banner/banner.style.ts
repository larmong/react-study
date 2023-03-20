import styled from "@emotion/styled";
import Slider from "react-slick";

export const Banner = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  div {
    height: 400px;
  }
  .slide1,
  .slide2,
  .slide3,
  .slide4 {
    background-size: cover;
    background-position: center;
  }
  .slide1 {
    background-image: url("/images/slide1.png");
  }
  .slide2 {
    background-image: url("/images/slide2.png");
  }
  .slide3 {
    background-image: url("/images/slide3.png");
  }

  button.slick-prev {
    position: absolute;
    left: 100px;
    z-index: 1;
    scale: 2.4;
  }
  button.slick-next {
    position: absolute;
    right: 100px;
    z-index: 1;
    scale: 2.4;
  }
  ul.slick-dots {
    position: absolute;
    bottom: 32px;
    z-index: 1;
    li {
      button {
        ::before {
          content: "";
          width: 8px;
          height: 8px;
          opacity: 1;
          border-radius: 50%;
          background: none;
          border: 1px solid #ffffff;
        }
      }
    }
    li.slick-active {
      button {
        ::before {
          background: #fff;
        }
      }
    }
  }
`;
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const SliderWrapper = styled.div``;
export const SliderBox = styled(Slider)``;
export const Slide = styled.div``;

export const SlideText = styled.div`
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;
export const SlideTitle = styled.h5`
  font-weight: 700;
  font-size: 48px;
  line-height: 71px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 15px;
`;
export const SlideContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;
