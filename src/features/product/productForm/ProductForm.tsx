import React, { useState, useEffect } from "react";
import Drawer from "../../../components/Drawer";
import Form from "../../../components/Form";
import FormItem from "../../../components/FormItem";
import DatePicker from "../../../components/DatePicker";
import { Form as AntForm, Input } from "antd";
import Button from "../../../components/Buttton";
import Content from "../../../components/Content";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { SaveOutlined } from "@ant-design/icons";
import { resetState } from "./productSlice";
interface Props {
  drawerOpen: boolean;
}
const ProductForm = (props: Props) => {
  const [form] = AntForm.useForm();

  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.data);
  useEffect(() => {
    if (!props.drawerOpen) {
      form.resetFields();
      dispatch(resetState());
    }
  }, [props.drawerOpen, form, dispatch]);

  useEffect(() => {
    form.setFieldsValue(product ?? {});
  }, [product, form]);

  const formStyle = {
    labelCol: { span: 3 },
  };
  const tailLayout = {
    wrapperCol: { offset: 3, span: 1 },
  };

  return (
    <Content>
      <Form form={form} style={formStyle}>
        <FormItem
          label="Urun Adi"
          name="description"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </FormItem>

        <FormItem
          label="Fiyat"
          name="price"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Bitis Tarihi"
          name="finishDate"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <DatePicker />
        </FormItem>
        <FormItem style={tailLayout}>
          <Button
            attrs={{ htmlType: "submit", type: "primary" }}
            text="Kaydet"
            icon={<SaveOutlined />}
          />
        </FormItem>
      </Form>
    </Content>
  );
};

export default ProductForm;
