import React from 'react';
import { Star } from 'lucide-react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { restaurantsList } from './dummyData';
const NavBar = () => {
  return (
    <div className='nav-container'>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const Header = (
  <div className='header-container'>
    <div className='img-container'>
      <img
        src='https://marketplace.canva.com/EAF1XAgJrCg/1/0/1600w/canva-white-brown-simple-restaurant-logo-koIA1HEug0Q.jpg'
        alt=''
      />
    </div>
    <NavBar />
  </div>
);

const SearchBar = () => (
  <div className='search-container'>
    <input type='text' placeholder='Search restaurant' />
  </div>
);

const RestaurantCard = (props) => {
  const { restaurantInfo } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = restaurantInfo.info;
  console.log(restaurantInfo);
  console.log(cloudinaryImageId);
  return (
    <div className='card-container'>
      <div className='card-img'>
        <img
          src={
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
            cloudinaryImageId
          }
          alt=''
        />
      </div>
      <div className='content'>
        <div className='restaurant'>{name}</div>
        <div style={{ display: 'flex', marginBottom: '3px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Star color='#f0c800' fill='#f0c800' size={16} />
            <div className='rating'>{avgRatingString}</div>
          </div>
          <div className='eta'>{sla.slaString}</div>
        </div>
        <div className='cuisines'>{cuisines.join(', ')}</div>
        <div>{costForTwo}</div>
      </div>
    </div>
  );
};
const PageContainer = () => {
  return (
    <div className='page-container'>
      <SearchBar />
      <div className='list'>
        {restaurantsList.map((restaurant) => (
          <RestaurantCard restaurantInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      {Header}
      <PageContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

// const heading = React.createElement('h1', {}, 'Heading');
// const subHeading = React.createElement('h2', {}, 'Sub Heading');
// const child1 = React.createElement('div', { id: 'child1' }, [
//   heading,
//   subHeading,
// ]);
// const child2 = React.createElement('div', { id: 'child2' }, [
//   heading,
//   subHeading,
// ]);
// const parent = React.createElement('div', { id: 'parent' }, [child1, child2]);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);
