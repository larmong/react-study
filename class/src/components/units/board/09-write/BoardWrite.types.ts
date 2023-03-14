import {ChangeEvent} from "react";

export interface IBoardWriteProps {
    isEdit: boolean
    data?:
}

// data?: "data.fetchBoard.writer"의 data 타입 지정,,, -> (Rest API는 다 써야하는게 맞음)
// interface IData {
//     fetchBoard: {
//         writer: string
//         title: string
//         contents: string
//     }
// }

export interface IMyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: () => void
    onClickUpdate: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    myColor: boolean
    isEdit: boolean
    data: any
}

export interface IBlueButtonProps {
    fz: string
    bg: boolean
}
