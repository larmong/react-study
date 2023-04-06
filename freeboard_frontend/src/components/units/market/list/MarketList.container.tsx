import MarketListUI from "./MarketList.persenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./MarketList.queries";
import { IQuery } from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function MarketList() {
  const router = useRouter();
  const { data: fetchUseditemsOfTheBest } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USED_ITEMS_OF_THE_BEST);
  const { data: fetchUseditems } =
    useQuery<Pick<IQuery, "fetchUseditems">>(FETCH_USED_ITEMS);

  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  const onClickToDetail = (value: any) => () => {
    router.push(`./market/${value}`);
  };
  const onClickToNew = () => {
    router.push(`./market/new`);
  };

  return (
    <MarketListUI
      bestItem={fetchUseditemsOfTheBest}
      usedItems={fetchUseditems}
      onClickToDetail={onClickToDetail}
      onClickToNew={onClickToNew}
      isSoldOut={isSoldOut}
    />
  );
}
