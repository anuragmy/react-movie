import React from 'react';
import { PageHeader, Button } from 'antd';
import { useDispatch, connect } from 'react-redux';
import { showFavourite } from '../../store/actions';

const Header = ({ showFav }) => {
  const [text, setText] = React.useState('Show Favourites');
  React.useEffect(() => {
    if (showFav) setText('Show All');
    else setText('Show Favourites');
  }, [showFav]);
  const dispatch = useDispatch();
  const toggleFavourites = () => {
    if (showFav) {
      dispatch(showFavourite(false));
      setText('Show All');
    } else {
      setText('Show Favourites');
      dispatch(showFavourite(true));
    }
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
  showFav: state.movies.showFav,
});

export default connect(mapStateToProps)(Header);
