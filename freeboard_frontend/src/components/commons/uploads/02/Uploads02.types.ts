import { ChangeEvent, RefObject } from "react";

export interface IPropsUploads02 {
  itemUrl: string;
  index: number;
  defaultItemUrl?: string;
  onChangeItemUrls: (itemUrl: string, index: number) => void;
}

export interface IPropsUploads02UI {
  itemUrl: string;
  defaultItemUrl?: string;
  itemUrlRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
