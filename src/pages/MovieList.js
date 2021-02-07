import React from 'react';
import { Row, Col } from 'antd';

import MovieCards from '../components/MovieCards';

const MovieList = () => {
  return (
    <div>
      <Row>
        <Col
          xs={{ span: 24, offset: 2 }}
          md={{ span: 12, offset: 2 }}
          lg={{ span: 6, offset: 2 }}
        >
          <MovieCards />
        </Col>
        <Col
          xs={{ span: 24, offset: 2 }}
          md={{ span: 12, offset: 2 }}
          lg={{ span: 6, offset: 2 }}
        >
          <MovieCards />
        </Col>
        <Col
          xs={{ span: 24, offset: 2 }}
          md={{ span: 12, offset: 2 }}
          lg={{ span: 6, offset: 2 }}
        >
          <MovieCards />
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
