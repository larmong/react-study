import { useEffect } from "react";
// import Head from "next/head";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapRoutedPage() {
  useEffect(() => {
    const script = document.createElement("script"); // script 태그가 만들기 <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=54bc3afc7f51bc48e41e8e3069689ea2";
    document.head.appendChild(script);

    // script 가 onload 되면 실행되도록 함수안에 설정하기
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.556923, 126.923877), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);
      });
    };
  }, []);

  return (
    <>
      {/*<Head>*/}
      {/*  <script*/}
      {/*    type="text/javascript"*/}
      {/*    src="//dapi.kakao.com/v2/maps/sdk.js? autoload=false appkey=54bc3afc7f51bc48e41e8e3069689ea2"*/}
      {/*  ></script>*/}
      {/*</Head>*/}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
