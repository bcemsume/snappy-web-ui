import React from "react";
import { Col as AntCol } from "antd";

interface Props {
  children?: React.ReactNode;
  style?: any;
}

const Col = (props: Props) => {
  return <AntCol {...props.style}>{props.children && props.children}</AntCol>;
};

export default Col;
