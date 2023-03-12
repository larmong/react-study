import { gql, useQuery } from "@apollo/client";
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

  console.log(data?.fetchBoards)

  return (
    <>
      {
        data?.fetchBoards.map(el => (
          <Row>
            <Column><input type="checkbox" /></Column>
            <Column>{el.number}</Column>
            <Column>{el.title}</Column>
            <Column>{el.contents}</Column>
          </Row>
        ))
      }
    </>
  )
}
