import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { LOGIN_USER } from "./Login.queries";
import { accessTokenState } from "../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { IUserInfo } from "./Login.types";
import LoginPageUI from "./Login.presenter";
import { Modal } from "antd";

export default function LoginPage() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    email: "",
    password: "",
  });

  const onChangeUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    try {
      const login = await loginUser({
        variables: { ...userInfo },
      });
      const accessToken = login.data?.loginUser.accessToken;
      if (accessToken) setAccessToken(accessToken);
      if (accessToken) localStorage.setItem("accessToken", accessToken);

      void router.push("/market");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPageUI
      onChangeUserInfo={onChangeUserInfo}
      onClickLogin={onClickLogin}
    />
  );
}
