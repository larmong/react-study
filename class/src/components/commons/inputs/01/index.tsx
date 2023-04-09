import { UseFormRegisterReturn } from "react-hook-form";

interface IPropsInput01 {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IPropsInput01) {
  return <input type={props.type} {...props.register} />;
}
