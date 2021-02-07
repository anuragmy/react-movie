import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Card, Radio } from 'antd';
import CardSkeleton from './CardSkeleton';
import { addToFavourite, removeFromFavourite } from '../store/actions';

const { Meta } = Card;

const MovieCards = ({
  loading,
  id,
  description,
  name = 'Friends',
  src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  alt = 'alt',
}) => {
  const dispatch = useDispatch();
  const [fav, setFav] = React.useState(false);
  const toggleFavourite = () => {
    setFav(!fav);
    dispatch(
      !fav
        ? addToFavourite({
            name,
            description,
            id,
          })
        : removeFromFavourite(id)
    );
  };

  return (
    <Card
      style={{ width: 300, marginTop: 16, margin: 20 }}
      extra={fav && <HeartTwoTone twoToneColor='#52c41a' />}
      cover={<img alt={alt} src={src} height='300px' width='auto' />}
      title={name}
      actions={[
        <Radio.Button key='1' onClick={toggleFavourite}>
          {!fav ? 'Add to favoruite' : 'Remove from favourite'}
        </Radio.Button>,
      ]}
    >
      <CardSkeleton
        component={<Meta title={name} description={description} />}
        loading={loading}
      />
    </Card>
  );
};

export default MovieCards;
