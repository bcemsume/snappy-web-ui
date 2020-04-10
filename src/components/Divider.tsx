import React from "react";
import { Divider as AntDivider } from "antd";
interface Props {
  type?: "horizontal" | "vertical";
}

const Divider = (props: Props) => {
  return <AntDivider type={props.type} />;
};

export default Divider;
