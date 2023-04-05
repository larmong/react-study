import MarketDetailUI from "./MarketDetail.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./MarketDetail.queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function MarketDetail() {
  const router = useRouter();
  const { data: fetchUseditem } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query._id) },
  });
  console.log(fetchUseditem);
  console.log(router.query._id);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onMouseOverLocation = () => {
    setIsHovering((prev) => !prev);
  };

  const onClickToList = () => {
    router.push("/market");
  };
  const onClickToBuy = () => {
    alert("구매하기 페이지는 없어용,, 🤥");
  };
  const onClickToEdit = () => {};

  return (
    <MarketDetailUI
      fetchUseditem={fetchUseditem}
      isHovering={isHovering}
      onMouseOverLocation={onMouseOverLocation}
      onClickToList={onClickToList}
      onClickToBuy={onClickToBuy}
      onClickToEdit={onClickToEdit}
    />
  );
}
