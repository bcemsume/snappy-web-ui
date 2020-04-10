import React from "react";
import { Space as AntSpace } from "antd";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  direction: "horizontal" | "vertical";
}

const Space = (props: Props) => {
  return <AntSpace direction={props.direction}>{props.children}</AntSpace>;
};

export default Space;
