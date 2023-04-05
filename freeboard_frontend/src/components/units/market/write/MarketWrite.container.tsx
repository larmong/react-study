import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  CustomMouseEvent,
  IMarketItem,
  IPropsMarketWrite,
} from "./MarketWrite.types";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";
import MarketWriteUI from "./MarketWrite.presenter";

export default function MarketWrite(props: IPropsMarketWrite) {
  const router = useRouter();
  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  useEffect(() => {
    console.log(router);
  });

  const [marketItems, setMarketItems] = useState<IMarketItem>({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });
  const [itemUrls, setItemUrls] = useState(["", ""]);

  const onChangeMarketItems = (event: ChangeEvent<any>) => {
    setMarketItems({
      ...marketItems,
      [event.target.id]: event.target.value,
    });
  };

  const onClickMoveToList = () => {
    router.push("/marker");
  };
  const onClickMoveToEdit = (event: CustomMouseEvent) => {
    // router.push(`/marker/${event.target._id}/edit`);
  };
  const onClickSubmit = async () => {
    try {
      const data = await createUsedItem({
        variables: {
          createUseditemInput: { ...marketItems },
        },
      });
      console.log(data);
      alert("상품이 등록되었습니다! 🥳");
      // router.push(`/market/${data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeItemUrls = (itemUrl: string, index: number) => {
    const newItemUrls = [...itemUrls];
    newItemUrls[index] = itemUrl;
    setItemUrls(newItemUrls);
  };

  return (
    <MarketWriteUI
      isEdit={props.isEdit}
      onChangeMarketItems={onChangeMarketItems}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickSubmit={onClickSubmit}
      itemUrls={itemUrls}
      onChangeItemUrls={onChangeItemUrls}
    />
  );
}
