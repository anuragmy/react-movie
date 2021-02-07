import React from 'react';
import { PageHeader, Button } from 'antd';

const Header = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Movies & Shows'
      subTitle='Get the latest shows'
      extra={[<Button key='1'>Show Favourites</Button>]}
    />
  );
};

export default Header;
