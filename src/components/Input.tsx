import React from "react";
import { Input as AntInput } from "antd";
interface Props {
  type: "text" | "password" | "textarea";
}

const Input = (props: Props) => {
  const { type } = props;
  return type === "text" ? (
    <AntInput />
  ) : type === "password" ? (
    <AntInput.Password />
  ) : (
    <AntInput.TextArea />
  );
};

export default Input;
