/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = function Home({ myList, trends, originals }) {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList={true} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
// export default connect(props,actions)(Home);
