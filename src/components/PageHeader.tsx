import React from "react";
import { PageHeader as AntPageHeader } from "antd";
interface Props {
  children: React.ReactNode;
  extra?: React.ReactNode;
  title: String;
  subTitle?: String;
}

const PageHeader = (props: Props) => {
  const { extra, title, subTitle, children } = props;
  return (
    <div>
      <AntPageHeader
        ghost={false}
        title={title}
        subTitle={subTitle}
        extra={extra}
      >
        {children}
      </AntPageHeader>
    </div>
  );
};

export default PageHeader;
