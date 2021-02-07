import React from 'react';
import { Skeleton } from 'antd';

const CardSkeleton = ({ component, loading }) => {
  return (
    <Skeleton loading={loading} avatar active>
      {component}
    </Skeleton>
  );
};

export default CardSkeleton;
