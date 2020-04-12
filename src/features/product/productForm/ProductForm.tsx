import React, { useEffect } from "react";
import Form from "../../../components/Form";
import FormItem from "../../../components/FormItem";
import { Form as AntForm, Input, DatePicker } from "antd";
import Button from "../../../components/Buttton";
import Content from "../../../components/Content";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { SaveOutlined } from "@ant-design/icons";
import { resetState, addProduct } from "./productSlice";
import { Product } from "../types";
import moment from "moment";
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
  const onFinish = (values: Product) => {
    let data: Product = {
      ID: 0,
      Description: values.Description,
      FinishDate: moment(values.FinishDate as any).toISOString(),
      Price: Number(values.Price),
      RestaurantID: 1,
    };
    dispatch(addProduct(data));
  };
  return (
    <Content>
      <Form onFinish={onFinish} form={form} style={formStyle}>
        <FormItem
          label="Urun Adi"
          name="Description"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </FormItem>

        <FormItem
          label="Fiyat"
          name="Price"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Bitis Tarihi"
          name="finishDate"
          rules={[
            {
              required: true,
              message: "Please input your password!",
              type: "object",
            },
          ]}
        >
          <DatePicker format="DD.MM.YYYY" />
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
