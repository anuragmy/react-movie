import React from 'react';
import { Skeleton } from 'antd';

const CardSkeleton = ({ loading }) => {
  return <Skeleton loading={loading} avatar active />;
};

export default CardSkeleton;
