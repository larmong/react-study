import { useRouter } from "next/router";
import LayoutNavigationUI from "./layoutNavigation.presenter";
import { CustomMouseEvent } from "./layoutNavigation.types";

export default function LayoutNavigation() {
  const router = useRouter();
  const nowRoute = router.pathname.split("/")[1];

  const onClickMoveToMenus = (event: CustomMouseEvent) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return (
    <LayoutNavigationUI
      onClickMoveToMenus={onClickMoveToMenus}
      nowRoute={nowRoute}
    />
  );
}
