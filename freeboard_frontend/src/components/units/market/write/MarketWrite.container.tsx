import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  CustomMouseEvent,
  IEditUsedItem,
  IMarketItem,
  IPropsMarketWrite,
} from "./MarketWrite.types";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import MarketWriteUI from "./MarketWrite.presenter";

export default function MarketWrite(props: IPropsMarketWrite) {
  const router = useRouter();
  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const [marketItems, setMarketItems] = useState<IMarketItem>({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });
  const [itemUrls, setItemUrls] = useState([""]);

  const onChangeMarketItems = (event: ChangeEvent<any>) => {
    setMarketItems({
      ...marketItems,
      [event.target.id]: event.target.value,
    });
  };

  const onClickMoveToList = () => {
    router.push("/marker");
  };

  const onClickMoveToEdit = async () => {
    try {
      const editUsedItem: IEditUsedItem = {};
      if (marketItems.name) editUsedItem.name = marketItems.name;
      if (marketItems.remarks) editUsedItem.remarks = marketItems.remarks;
      if (marketItems.contents) editUsedItem.contents = marketItems.contents;
      if (marketItems.price) editUsedItem.price = marketItems.price;

      const data = await updateUsedItem({
        variables: {
          useditemId: String(router.query._id),
          updateUseditemInput: editUsedItem,
        },
      });
      alert("상품이 수정되었습니다! 🥳");
      router.push(`/market/${router.query._id}`);
    } catch (err) {
      console.log(err);
    }
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
      router.push(`/market/${router.query._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeItemUrls = (itemUrl: string, index: number) => {
    let newItemUrls = [...itemUrls, ""];
    if (itemUrls.length >= 3) newItemUrls = [...itemUrls];

    newItemUrls[index] = itemUrl;
    setItemUrls(newItemUrls);
  };

  return (
    <MarketWriteUI
      isEdit={props.isEdit}
      data={props.data}
      onChangeMarketItems={onChangeMarketItems}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickSubmit={onClickSubmit}
      itemUrls={itemUrls}
      onChangeItemUrls={onChangeItemUrls}
    />
  );
}
