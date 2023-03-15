import {IQuery} from "../../../../commons/types/generated/types";
import {ChangeEvent, MouseEvent} from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>

export interface IPropsBoardDetailUI {
    fetchBoard?: Pick<IQuery, "fetchBoard">
    fetchBoardComments?: Pick<IQuery, "fetchBoardComments">
    locationInfo: boolean
    onClickLocation: () => void
    onClickMoveToEdit: () => void
    onClickMoveToList: () => void
    onClickDelete: () => void
    commentLength: string
    onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void
    onClickCreateComment: () => void
    onClickDeleteComment: (event: CustomMouseEvent) => void
}
