import {IQuery} from "../../../../commons/types/generated/types";
import {ChangeEvent} from "react";

export interface IPropsBoardWrite {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IEditVariables {
    title?: string
    contents?: string
}

export interface IPropsBoardWriteUI {
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickSubmit: () => void
    onClickMoveToEdit: () => void
    onClickMoveToList: () => void
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}
