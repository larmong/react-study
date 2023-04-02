import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import FetchPolicyExample from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function GlobalStatePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(true);
  };

  const onClickMove = () => {
    router.push("/21-05-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClick}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickMove}>
        버튼을 클릭하면 페이지가 이동됩니다!!!
      </button>
    </div>
  );
}
