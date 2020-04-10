import React, { ReactNode } from "react";
import { Input as AntInput } from "antd";
interface Props {
  type: "text" | "password" | "textarea";
  value?: any;
  addonAfter?: string | ReactNode;
  addonBefore?: string | ReactNode;
}

const Input = (props: Props) => {
  const { type, value, addonBefore, addonAfter } = props;
  return type === "text" ? (
    <AntInput addonAfter={addonAfter} addonBefore={addonBefore} value={value} />
  ) : type === "password" ? (
    <AntInput.Password value={value} />
  ) : (
    <AntInput.TextArea value={value} />
  );
};

export default Input;
