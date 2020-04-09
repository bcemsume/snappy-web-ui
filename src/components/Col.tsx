import React from "react";
import { Col as AntCol } from "antd";

interface Props {
  children?: React.ReactNode;
  sytle?: any;
}

const Col = (props: Props) => {
  return <AntCol {...props.sytle}>{props.children && props.children}</AntCol>;
};

export default Col;
