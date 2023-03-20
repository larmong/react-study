import LayoutHeader from "../../components/commons/layout/header";
import LayoutBanner from "../../components/commons/layout/banner";
import LayoutNavigation from "../../components/commons/layout/navigation";
import LayoutFooter from "../../components/commons/layout/footer";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
