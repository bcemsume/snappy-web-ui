import React from "react";
import { Row as AntRow } from "antd";
interface Props {
  children?: React.ReactNode;
  sytle?: any;
}

const Row = (props: Props) => {
  return <AntRow {...props.sytle}>{props.children}</AntRow>;
};

export default Row;
