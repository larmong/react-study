import { useEffect } from "react";
import { useRouter } from "next/router";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능한 페이지입니다! 😰");
      void router.push("/market");
    }
  });

  return <Component {...props} />;
};
