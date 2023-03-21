import styled from "@emotion/styled";
import LayoutHeader from "../../components/commons/layout/header/layoutHeader.container";
import LayoutBanner from "../../components/commons/layout/banner";
import LayoutNavigation from "../../components/commons/layout/navigation/layoutNavigation.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>{props.children}</Wrapper>
    </>
  );
}
