import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Skeleton, Card, Radio } from 'antd';
import CardSkeleton from './CardSkeleton';

const { Meta } = Card;

const MovieCards = ({
  loading = false,
  name = 'Friends',
  src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  alt = 'alt',
}) => {
  const [fav, setFav] = React.useState(false);
  const toggleFavourite = () => setFav(!fav);
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      extra={fav && <HeartTwoTone twoToneColor='#52c41a' />}
      cover={<img alt={alt} src={src} />}
      title={name}
      actions={[
        <Radio.Button key='1' onClick={toggleFavourite}>
          {!fav ? 'Add to favoruite' : 'Remove from favourite'}
        </Radio.Button>,
      ]}
    >
      <CardSkeleton
        component={
          <Meta title='Card title' description='This is the description' />
        }
        loading={loading}
      />
    </Card>
  );
};

export default MovieCards;
