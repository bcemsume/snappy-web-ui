import React from "react";
import { Select } from "antd";
interface Props {
  children: String;
  value: any;
}

const Option = (props: Props) => {
  return <Select.Option value={props.value}>{props.children}</Select.Option>;
};

export default Option;
