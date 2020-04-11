import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import Content from "../components/Content";
import Button from "../components/Buttton";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import Drawer from "../components/Drawer";
import Form from "../components/Form";
import FormItem from "../components/FormItem";
import DatePicker from "../components/DatePicker";
import { Form as AntForm, Input } from "antd";
import ProductList from "../features/product/ProductList";

const formStyle = {
  labelCol: { span: 3 },
};

const extraButtons = (setDrawerVisible: any) => (
  <>
    <Button
      onClick={() => {
        setDrawerVisible(true);
      }}
      type="primary"
      text="Yeni"
      icon={<PlusOutlined />}
    />
    <Button type="danger" text="Toplu Sil" icon={<DeleteOutlined />} />
  </>
);

const Products = () => {
  const [form] = AntForm.useForm();

  const [drawerVisible, setDrawerVisible] = useState(false);

  const drawerFooter = () => (
    <div
      style={{
        textAlign: "right",
      }}
    >
      <Button
        style={{ style: { marginRight: 8 } }}
        text="Iptal"
        onClick={() => {
          form.resetFields();
        }}
      />
      <Button type="primary" text="Kaydet" />
    </div>
  );

  const onClose = () => {
    setDrawerVisible(false);
    form.resetFields();
  };
  const onFinish = (value: any): void => {};
  return (
    <PageHeader title="Urunler" extra={extraButtons(setDrawerVisible)}>
      <Divider />
      <Content>
        <ProductList />
      </Content>
      <Drawer
        footer={drawerFooter()}
        onClose={onClose}
        visible={drawerVisible}
        title="Yeni Urun"
      >
        <Content>
          <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinish}
            style={formStyle}
          >
            <FormItem
              label="Urun Adi"
              name="description"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input type="text" />
            </FormItem>

            <FormItem
              label="Fiyat"
              name="price"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input type="text" />
            </FormItem>
            <FormItem
              label="Bitis Tarihi"
              name="finisDate"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <DatePicker />
            </FormItem>
          </Form>
        </Content>
      </Drawer>
    </PageHeader>
  );
};

export default Products;
