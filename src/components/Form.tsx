import React from "react";
import { Form as AntForm } from "antd";
interface Props {
  children: React.ReactNode[];
  initValues?: any;
  style?: any;
}

const Form = (props: Props) => {
  const { initValues, style, children } = props;
  return (
    <AntForm {...style} initialValues={initValues}>
      {children}
    </AntForm>
  );
};

export default Form;
