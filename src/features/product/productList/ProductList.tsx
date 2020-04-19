import React, { useEffect } from "react";
import DataTable from "../../../components/DataTable";
import Button from "../../../components/Buttton";
import Divider from "../../../components/Divider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { getProducts, deleteProduct } from "./productListSlice";
import { getProduct } from "../productForm/productSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Product } from "../types";
import { Popconfirm } from "antd";
import notify from "../../../components/Notification";

interface Props {
  onEditClick: () => void;
}

const ProductList = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productList);
  const loginUser = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (!products.isSuccess && products.errors !== undefined) {
      notify({
        type: "error",
        title: "Hata",
        message: products.errors,
      });
    }
  }, [products]);

  useEffect(() => {
    dispatch(getProducts(loginUser?.RestaurantID ?? 0));
  }, [dispatch, loginUser]);
  const columns = [
    {
      title: "Urun Adi",
      dataIndex: "Description",
      key: "description",
    },
    {
      title: "Fiyat",
      dataIndex: "Price",
      key: "price",
    },
    {
      title: "Bitis Tarihi",
      dataIndex: "FinishDate",
      key: "finishDate",
    },
    {
      title: "Islemler",
      key: "islemler",
      render: (text: any, record: Product) => (
        <span>
          <Button
            text=""
            type="primary"
            shape="round"
            icon={<EditOutlined />}
            onClick={() => {
              props.onEditClick();
              dispatch(getProduct(record.ID));
            }}
          />
          <Divider type="vertical" />
          <Popconfirm
            placement="left"
            title={"Silmek Istediginize Emin misiniz?"}
            onConfirm={() => {
              dispatch(deleteProduct(record.ID));
            }}
            okText="Evet"
            cancelText="Hayir"
          >
            <Button
              text=""
              type="danger"
              shape="round"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <DataTable
      loading={products.loading}
      columns={columns}
      data={products.data}
    ></DataTable>
  );
};

export default ProductList;
