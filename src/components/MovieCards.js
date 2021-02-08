import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { useDispatch, connect } from 'react-redux';
import { Card, Radio } from 'antd';
import CardSkeleton from './CardSkeleton';
import { addToFavourite, removeFromFavourite } from '../store/actions';

const { Meta } = Card;

const MovieCards = ({
  loading = false,
  id,
  description,
  name = 'Friends',
  image = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  alt = 'alt',
  isFav,
}) => {
  const dispatch = useDispatch();
  const [favourite, setFav] = React.useState(false);
  const toggleFavourite = () => {
    if (!favourite) {
      setFav(!isFav);
      dispatch(addToFavourite({ name, id, description }));
    } else dispatch(removeFromFavourite(id));
  };

  return (
    <Card
      style={{ width: 300, marginTop: 16, margin: 20 }}
      extra={isFav && <HeartTwoTone twoToneColor='#52c41a' />}
      cover={<img alt={alt} src={image} height='300px' width='auto' />}
      title={name}
      actions={[
        <Radio.Button key='1' onClick={toggleFavourite}>
          {!isFav ? 'Add to favoruite' : 'Remove from favourite'}
        </Radio.Button>,
      ]}
    >
      <CardSkeleton loading={loading} />
    </Card>
  );
};

const mapStateToProps = (state) => ({
  isFav: state.movies.showFav,
});

export default connect(mapStateToProps)(MovieCards);
