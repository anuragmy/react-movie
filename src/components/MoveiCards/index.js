import React from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Card, Radio } from 'antd';
import { addToFavourite, removeFromFavourite } from '../../store/actions';

const MovieCards = ({ id, description, name, image, alt }) => {
  const dispatch = useDispatch();
  const [favourite, setFav] = React.useState(false);
  const toggleFavourite = () => {
    if (!favourite) {
      setFav(!favourite);
      dispatch(addToFavourite({ name, id, description, image }));
    } else {
      setFav(false);
      dispatch(removeFromFavourite(id));
    }
  };

  return (
    <Card
      data-test='MovieCardComponent'
      style={{ width: 300, marginTop: 16, margin: 20 }}
      extra={favourite && <HeartTwoTone twoToneColor='#52c41a' />}
      cover={
        <img
          alt={alt}
          data-test='movieImage'
          src={image}
          height='300px'
          width='auto'
        />
      }
      title={name}
      actions={[
        <Radio.Button key='1' onClick={toggleFavourite}>
          {!favourite ? 'Add to favoruite' : 'Remove from favourite'}
        </Radio.Button>,
      ]}
    />
  );
};

export default MovieCards;
