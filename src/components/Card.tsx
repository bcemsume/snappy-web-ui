import React, { useState } from "react";
import { Card as AntCard } from "antd";

interface Props {
  tabList?: any;
  contentList?: any;
  onTabChange?: (key: any) => void;
  title: String;
  style?: any;
  children?: React.ReactNode;
}

const Card = (props: Props) => {
  const { title, style, tabList, onTabChange, contentList, children } = props;
  const [content, setcontent] = useState<any>(tabList && tabList[0].key);
  return (
    <AntCard
      style={style}
      title={title}
      tabList={tabList}
      activeTabKey={content}
      onTabChange={(key: any) => {
        setcontent(key);
        if (onTabChange) onTabChange(key);
      }}
    >
      {children}
      {contentList && contentList[content]}
    </AntCard>
  );
};

export default Card;
