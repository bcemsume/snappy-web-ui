import React from "react";
import { Form as AntForm } from "antd";
interface Props {
  children: React.ReactNode;
  initialValues?: any;
  style?: any;
  onFinish?: (values: any) => void;
  onFinishFailed?: (values: any) => void;
}

const Form = (props: Props) => {
  const { initialValues, style, children, onFinish, onFinishFailed } = props;

  return (
    <AntForm
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      {...style}
      initialValues={{ initialValues }}
    >
      {children}
    </AntForm>
  );
};

export default Form;
