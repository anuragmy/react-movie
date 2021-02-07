import React from 'react';
import { PageHeader } from 'antd';

const Header = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Movies & Shows'
      subTitle='Get the latest shows'
      styles={{
        textAlign: 'center',
      }}
    />
  );
};

export default Header;
