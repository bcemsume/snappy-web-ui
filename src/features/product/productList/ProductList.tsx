import React, { useEffect } from "react";
import DataTable from "../../../components/DataTable";
import Button from "../../../components/Buttton";
import Divider from "../../../components/Divider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { getProducts } from "./productListSlice";
import { getProduct } from "../productForm/productSlice";
import { EditOutlined } from "@ant-design/icons";

interface Props {
  onEditClick: () => void;
}

const ProductList = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const columns = [
    {
      title: "Urun Adi",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Fiyat",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Bitis Tarihi",
      dataIndex: "finishDate",
      key: "finishDate",
    },
    {
      title: "Islemler",
      key: "islemler",
      render: (text: any, record: any) => (
        <span>
          <Button
            text=""
            type="primary"
            shape="round"
            icon={<EditOutlined />}
            onClick={() => {
              debugger;
              props.onEditClick();
              dispatch(getProduct(record.id));
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
