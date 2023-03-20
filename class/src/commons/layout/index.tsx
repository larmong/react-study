import LayoutHeader from "../../components/commons/layout/header";
import LayoutBanner from "../../components/commons/layout/banner";
import LayoutNavigation from "../../components/commons/layout/navigation";
import LayoutFooter from "../../components/commons/layout/footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = [
  "/12-02-library-star",
  // ... 등등
];

interface ILayoutProps {
  children: JSX.Element;
}

export default function LayoutPage(props: ILayoutProps) {
  const router = useRouter();
  console.log(router.asPath);

  const isHeddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHeddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <section style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", background: "lightblue" }}>Side Menu</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </section>
      <LayoutFooter />
    </>
  );
}

// 만약 고정되어있는 헤더, 배너, 네비, 푸터등 특정페이지에서는 보이지 않게 하려면
// url 주소에 따라서 안보이게 해주면 됨 => runter aspath(현재 url)

// const HIDDEN_HEADERS = [
//   "/12-02-library-star",
//   // ... 등등
// ];

// const router = useRouter();

// const isHeddenHeader = HIDDEN_HEADERS.includes(router.asPath);

// {!isHeddenHeader && <LayoutHeader />}   => 조건부 렌더링
