import {gql, useMutation} from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct (seller: $seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`
export default function GraphqlMutationPage() {
  const [MyFunction] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {  // variables 이게 $ 역할을 해줌
        seller: "홍셀러",
        createProductInput: {
          name: "화이트",
          detail: "정말 깨끗한 컬러",
          price: 3000,
        }
      }
    })
    alert(result.data.createProduct.message)
    console.log(result)
  }

  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )
}
