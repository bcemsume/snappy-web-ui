import React from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Buttton";

import { SaveOutlined } from "@ant-design/icons";
import Content from "../components/Content";
import Divider from "../components/Divider";
import Option from "../components/Option";
import Select from "../components/Select";
import FormItem from "../components/FormItem";
import Form from "../components/Form";
import Input from "../components/Input";

const layout = {
  labelCol: { span: 3 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 1 },
};

var paymentMethodsChildrens: any[] = [];
var workingDaysChildrens: any[] = [];

const paymentMethods = [
  "Kredi Karti",
  "Nakit",
  "Sodexo",
  "Multinet",
  "Yemek Ceki",
];
const workingDays = [
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
for (let i = 0; i < workingDays.length; i++) {
  workingDaysChildrens.push(
    <Option value={workingDays[i]} key={i}>
      {workingDays[i]}
    </Option>
  );
}

for (let i = 0; i < paymentMethods.length; i++) {
  paymentMethodsChildrens.push(
    <Option value={paymentMethods[i]} key={i}>
      {paymentMethods[i]}
    </Option>
  );
}

const Restaurant = () => {
  return (
    <PageHeader title="Restaurant Bilgileri">
      <Divider />
      <Content>
        <Form style={layout} initValues={{ remember: true }}>
          <FormItem
            label="Sirket Adi"
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="text" />
          </FormItem>

          <FormItem
            label="Adres"
            name="address"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="textarea" />
          </FormItem>

          <FormItem
            label="e-Mail"
            name="email"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="text" />
          </FormItem>

          <FormItem
            label="Telefon"
            name="phone"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="text" />
          </FormItem>

          <FormItem label="Odeme Yontemleri" name="paymentMethods">
            <Select mode="multiple" placeholder="Odeme Yontemleri">
              {paymentMethodsChildrens}
            </Select>
          </FormItem>

          <FormItem label="Calisma Gunleri" name="workingDays">
            <Select mode="multiple" placeholder="Calisma Gunleri">
              {workingDaysChildrens}
            </Select>
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

export default Restaurant;
