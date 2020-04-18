import React, { useEffect } from "react";
import Form from "../../../components/Form";
import FormItem from "../../../components/FormItem";
import { Form as AntForm, Input, DatePicker, Select } from "antd";
import Button from "../../../components/Buttton";
import Content from "../../../components/Content";
import Option from "../../../components/Option";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { SaveOutlined } from "@ant-design/icons";
import { resetState, addCampaign } from "./campaignSlice";
import { getProducts } from "../../product/productList/productListSlice";
import { Campaign } from "../types";
import moment from "moment";

interface Props {
  drawerOpen: boolean;
}

const CampaignForm = (props: Props) => {
  const [form] = AntForm.useForm();

  const dispatch = useDispatch();

  var productChildrens: any[] = [];
  const products = useSelector((state: RootState) => state.productList.data);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  for (let i = 0; i < products.length; i++) {
    productChildrens.push(
      <Option value={products[i].ID} key={i}>
        {products[i].Description}
      </Option>
    );
  }

  const campaign = useSelector((state: RootState) => state.campaign.data);
  useEffect(() => {
    if (!props.drawerOpen) {
      form.resetFields();
      dispatch(resetState());
    }
  }, [props.drawerOpen, form, dispatch]);

  useEffect(() => {
    debugger;
    form.setFieldsValue(campaign ?? {});
  }, [campaign, form]);

  const formStyle = {
    labelCol: { span: 3 },
  };
  const tailLayout = {
    wrapperCol: { offset: 3, span: 1 },
  };

  const onFinish = (values: Campaign) => {
    debugger;
    let data: Campaign = {
      ID: 0,
      ProductID: Number(values.ProductID),
      Claim: Number(values.Claim),
      FinishDate: moment(values.FinishDate as any).toISOString(),
    };
    dispatch(addCampaign(data));
  };
  return (
    <Content>
      <Form onFinish={onFinish} form={form} style={formStyle}>
        <FormItem
          label="Adet"
          name="Claim"
          rules={[{ required: true, message: "Please input claim!" }]}
        >
          <Input type="number" />
        </FormItem>

        <FormItem
          label="Bitis Tarihi"
          name="finishDate"
          rules={[
            {
              required: true,
              message: "Please input finish date!",
              type: "object",
            },
          ]}
        >
          <DatePicker format="DD.MM.YYYY" />
        </FormItem>

        <FormItem label="Urun" name="ProductID">
          <Select placeholder="Urun">{productChildrens}</Select>
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

export default CampaignForm;
