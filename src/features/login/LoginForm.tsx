import React, { useEffect } from "react";
import Spin from "../../components/Spin";
import Form from "../../components/Form";
import FormItem from "../../components/FormItem";
import { Input, Form as AntForm } from "antd";
import Button from "../../components/Buttton";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { UserLogin } from "./types";
import { RootState } from "../../redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./loginSlice";
import history from "../../shared/History";
import { notification } from "antd";
import notify from "../../components/Notification";
import { getUser } from "../user/userSlice";

interface Props {}
const layout = {
  labelCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { span: 1 },
};

const LoginForm = (props: Props) => {
  const [form] = AntForm.useForm();
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.login);
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!loginState.isSuccess && loginState.errors !== undefined) {
      notify({
        type: "error",
        title: "Hata",
        message: loginState.errors,
      });
    }
    if (loginState.isSuccess) {
      history.push("/app");
    }
    if ((userState.data?.RestaurantID ?? 0) > 0) {
      history.push("/app");
    }
    dispatch(getUser());
  }, [loginState, userState, dispatch]);
  const onFinish = (values: UserLogin) => {
    dispatch(login(values));
  };
  return (
    <Form form={form} style={layout} onFinish={onFinish}>
      <FormItem
        name="UserName"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </FormItem>

      <FormItem
        name="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </FormItem>

      <FormItem style={tailLayout}>
        <Button
          loading={loginState.loading}
          attrs={{ htmlType: "submit", type: "primary" }}
          text="Giris"
        />
      </FormItem>
    </Form>
  );
};

export default LoginForm;
