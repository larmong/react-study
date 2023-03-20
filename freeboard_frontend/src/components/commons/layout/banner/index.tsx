import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./banner.style";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
  };

  return (
    <S.Banner>
      <S.SliderWrapper>
        <S.SlideText>
          <S.SlideTitle>carousel Design</S.SlideTitle>
          <S.SlideContent>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은
            <br />
            공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
            <br />
            각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </S.SlideContent>
        </S.SlideText>
        <S.SliderBox {...settings}>
          <S.Slide className="slide1"></S.Slide>
          <S.Slide className="slide2"></S.Slide>
          <S.Slide className="slide3"></S.Slide>
        </S.SliderBox>
      </S.SliderWrapper>
    </S.Banner>
  );
}
