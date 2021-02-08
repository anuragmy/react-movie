import React from 'react';
import { PageHeader, Button } from 'antd';
import { useDispatch, connect } from 'react-redux';
import { showFav } from '../store/actions';

const Header = ({ isFav }) => {
  const [fav, setFav] = React.useState(false);
  console.log('fav', isFav);
  const [text, setText] = React.useState('Show Favourites');
  React.useEffect(() => {
    if (isFav) setText('Show All');
    else setText('Show Favourites');
  }, [isFav]);
  const dispatch = useDispatch();
  const toggleFavourites = () => {
    setFav(!fav);
    dispatch(fav ? showFav(true) : showFav(false));
  };
  return (
    <PageHeader
      className='site-page-header'
      title='Movies & Shows'
      subTitle='Get the latest shows'
      extra={[
        <Button key='1' onClick={toggleFavourites}>
          {text}
        </Button>,
      ]}
    />
  );
};

const mapStateToProps = (state) => ({
  isFav: state.movies.showFav,
});

export default connect(mapStateToProps)(Header);
