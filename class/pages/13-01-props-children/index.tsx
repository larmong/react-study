import Layout from "../../src/components/units/13-props-children";

export default function PropsChildrenPage() {
  return (
    // props.children => 일반적으로 레이아웃 만들 때 사용한다.
    // 나머지들은 냅두고 props.children 에 페이지만 보여주고 헤더, 네비, 푸터 는 그대로 둠

    <Layout school="다람쥐초등학교">
      {/*<input type="text" />*/}
      {/*<button>클릭해주세요!</button>*/}
      <div>게시글 목록 페이지</div>
    </Layout>
  );
}

// layout1
// ===== 헤 더 =====   <- 고정
// ===== 배 너 =====   <- 고정
// ===== 네 비 =====   <- 고정
// ===== 페이지 =====   <- props.children 여기만 바뀜

// layout2
//   === 헤 더 =====   <- 고정
// 네 ===  페   =====   <- props.children
// 비 === 이 지 =====   <- 여기만 바뀜
//   === 푸 터 =====   <- 고정
