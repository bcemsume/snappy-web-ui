import React from "react";
import { Spin as AntSpin } from "antd";

interface Props {
  spinning?: boolean;
  children?: React.ReactNode;
}

const Spin = (props: Props) => {
  return <AntSpin spinning={props.spinning}>{props.children}</AntSpin>;
};

export default Spin;
