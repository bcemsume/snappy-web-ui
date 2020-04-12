import React, { useEffect } from "react";
import DataTable from "../../../components/DataTable";
import Button from "../../../components/Buttton";
import Divider from "../../../components/Divider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { getProducts } from "./productListSlice";
import { getProduct } from "../productForm/productSlice";
import { EditOutlined } from "@ant-design/icons";
import { Product } from "../types";

interface Props {
  onEditClick: () => void;
}

const ProductList = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);
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
