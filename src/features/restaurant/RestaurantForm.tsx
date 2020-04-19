import React, { useEffect } from "react";
import Button from "../../components/Buttton";
import { SaveOutlined } from "@ant-design/icons";
import FormItem from "../../components/FormItem";
import Form from "../../components/Form";
import { Form as AntForm, Input, Select } from "antd";
import Option from "../../components/Option";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getRestaurant, saveRestaurant } from "./restaurantSlice";
import { Restaurant } from "./types";
import Spin from "../../components/Spin";

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

interface Props {}

const RestaurantForm = (props: Props) => {
  const [form] = AntForm.useForm();

  const dispatch = useDispatch();
  const restaurants = useSelector((state: RootState) => state.restaurant);
  const loginUser = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    dispatch(getRestaurant(loginUser?.RestaurantID ?? 0));
  }, [dispatch]);

  useEffect(() => {
    let data: any = { ...restaurants.data };
    data.WorkingDays = restaurants.data?.WorkingDays.split(",");
    data.PaymentMethods = restaurants.data?.PaymentMethods.split(",");

    form.setFieldsValue(data);
  }, [restaurants, form]);

  const onFinish = (values: Restaurant) => {
    values.WorkingDays = values.WorkingDays.toString();
    values.PaymentMethods = values.PaymentMethods.toString();
    values.ID = restaurants.data?.ID ?? 0;
    dispatch(saveRestaurant(values));
  };
  return (
    <Spin spinning={restaurants.loading}>
      <Form form={form} style={layout} onFinish={onFinish}>
        <FormItem
          label="Sirket Adi"
          name="Title"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input type="text" />
        </FormItem>

        <FormItem
          label="Adres"
          name="Address"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.TextArea />
        </FormItem>

        <FormItem
          label="e-Mail"
          name="Email"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="text" />
        </FormItem>

        <FormItem
          label="Telefon"
          name="Phone"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="text" />
        </FormItem>

        <FormItem label="Odeme Yontemleri" name="PaymentMethods">
          <Select mode="multiple" placeholder="Odeme Yontemleri">
            {paymentMethodsChildrens}
          </Select>
        </FormItem>

        <FormItem label="Calisma Gunleri" name="WorkingDays">
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
    </Spin>
  );
};

export default RestaurantForm;
