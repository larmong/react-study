import { MouseEvent } from "react";
import { useRouter } from "next/router";
import LayoutHeaderUI from "./layoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToMenus = (event: MouseEvent<HTMLElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return <LayoutHeaderUI onClickMoveToMenus={onClickMoveToMenus} />;
}
