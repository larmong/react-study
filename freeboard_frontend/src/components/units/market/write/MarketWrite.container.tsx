import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  CustomMouseEvent,
  IMarketItem,
  IpropsMarketWrite,
} from "./MarketWrite.types";
import { CREATE_USED_ITEM } from "./MarketWrite.queries";
import MarketWriteUI from "./MarketWrite.presenter";

export default function MarketWrite(props: IpropsMarketWrite) {
  const router = useRouter();
  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [marketItems, setMarketItems] = useState<IMarketItem>({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
  });

  const onChangeMarketItems = (event: ChangeEvent<HTMLInputElement>) => {
    setMarketItems({
      ...marketItems,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeName = () => {};
  const onChangeRemarks = () => {};
  const onChangeContents = () => {};
  const onChangePrice = () => {};
  const onChangeTags = () => {};

  const onClickMoveToList = () => {
    router.push("/marker");
  };
  const onClickMoveToEdit = (event: CustomMouseEvent) => {
    router.push(`/marker/${event.target._id}/edit`);
  };
  const onClickSubmit = async () => {
    try {
      const data = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: marketItems.name,
            remarks: marketItems.remarks,
            contents: marketItems.contents,
            price: marketItems.price,
          },
        },
      });
      console.log(data);
      alert("상품이 등록되었습니다! 🥳");
      // router.push(`/market/${data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MarketWriteUI
      isEdit={props.isEdit}
      onChangeMarketItems={onChangeMarketItems}
      onChangeName={onChangeName}
      onChangeContents={onChangeContents}
      onChangePrice={onChangePrice}
      onChangeRemarks={onChangeRemarks}
      onChangeTags={onChangeTags}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickSubmit={onClickSubmit}
    />
  );
}
