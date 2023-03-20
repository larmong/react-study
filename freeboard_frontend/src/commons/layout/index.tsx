import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeader from "../../components/commons/layout/header";
import LayoutBanner from "../../components/commons/layout/banner";
import LayoutNavigation from "../../components/commons/layout/navigation";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const naviId = router.pathname.split("/");

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation naviId={naviId[1]} />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
}
