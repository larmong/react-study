import {gql, useMutation, useQuery} from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard (number: $number ) {
      message
    }
  }
`



const Row = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Column = styled.div `
  font-size: 20px;
  width: 10%;
  height: 40px;
  border-bottom: 1px solid #BDBDBD;
  line-height: 40px;
`

export default function MapBoardsPage() {
  const {data} = useQuery(FETCH_BOARDS)
  const [deleteBoard] = useMutation(DELETE_BOARD)

  // console.log(data?.fetchBoards)
  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        number: Number(event.target.id)
      },
      refetchQueries: [{query: FETCH_BOARDS}]  // 삭제 완료 후 새로고침 대신 다시 10개의 목록을 다시 가져오는 기능
    })
  }

  return (
    <>
      {
        data?.fetchBoards.map(el => (
          <Row key={el.number}>
            <Column><input type="checkbox" /></Column>
            <Column>{el.number}</Column>
            <Column>{el.title}</Column>
            <Column>{el.contents}</Column>
            <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
          </Row>
        ))
      }
    </>
  )
}
