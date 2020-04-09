import React from "react";
import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import Content from "../components/Content";
import Form from "../components/Form";
import FormItem from "../components/FormItem";
import Input from "../components/Input";
import Button from "../components/Buttton";
import { SaveOutlined } from "@ant-design/icons";
import Select from "../components/Select";
import DatePicker from "../components/DatePicker";

const layout = {
  labelCol: { span: 3 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 1 },
};

const Products = () => {
  return (
    <PageHeader title="Urunler">
      <Divider />
      <Content>
        <Form style={layout} initValues={{ remember: true }}>
          <FormItem
            label="Urun Adi"
            name="description"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="text" />
          </FormItem>

          <FormItem
            label="Fiyat"
            name="price"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="textarea" />
          </FormItem>

          <FormItem
            label="Son Tarih"
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
    </PageHeader>
  );
};

export default Products;
