import React, { useState, useEffect } from "react";
import Spin from "../../../components/Spin";
import { Carousel } from "antd";
import useFirebaseUpload from "../../../hooks/useFirebaseFileUploader";
import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Button from "../../../components/Buttton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { saveImages, getImages } from "./restaurantImageSlice";
import { Image as Images, ImageState, ImageModel } from "../types";
interface Props {}

const RestaurantImages = (props: Props) => {
  const [{ data, isLoading }, setFileData] = useFirebaseUpload();

  const [images, setImages] = useState([] as any);
  const restaurantImages = useSelector(
    (state: RootState) => state.restaurantImages
  );

  const loginUser = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(loginUser?.RestaurantID ?? 0));
  }, [dispatch, loginUser]);

  useEffect(() => {
    if (restaurantImages.data.Images.length > 0)
      setImages(restaurantImages.data.Images?.map((x) => x.ImageURL));
  }, [restaurantImages]);

  useEffect(() => {
    let img = images;
    img.push(data?.downloadUrl);
    setImages(img);
  }, [data]);

  const prepareData = () => {
    let data: Images[] = [];

    images
      .filter((x: any) => x !== "")
      .forEach((x: any) => {
        data.push({
          Order: 1,
          Type: 1,
          ImageURL: x,
          ID: 0,
        } as Images);
      });

    return data;
  };
  const handleClick = () => {
    let data: ImageModel = {
      Images: prepareData(),
      RestaurantID: loginUser?.RestaurantID ?? 0,
    };
    dispatch(saveImages(data));
    setImages([]);
    dispatch(getImages(loginUser?.RestaurantID ?? 0));
  };
  return (
    <>
      <Spin spinning={restaurantImages.loading}>
        <Spin spinning={isLoading}>
          <Row>
            <Col style={{ span: 8 }}>
              <input
                type="file"
                onChange={(e: any) => {
                  setFileData(e.target.files[0]);
                }}
              />
            </Col>
            <Col style={{ span: 2, offset: 14 }}>
              <Button onClick={handleClick} type="primary" text="Kaydet" />
            </Col>
          </Row>
        </Spin>
        <Carousel>
          {images.map((x: any) => {
            if (x)
              return (
                <div>
                  <img src={x} alt="" />
                </div>
              );
          })}
        </Carousel>
      </Spin>
    </>
  );
};

export default RestaurantImages;
