// import { Rate } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)``;

export default function LibraryStarPage() {
  const [value, setValue] = useState(0);
  const score = (val: number) => setValue(val);

  return <MyStar onChange={setValue} />;
}
