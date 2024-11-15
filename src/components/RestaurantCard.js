import { Star } from 'lucide-react';

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

export default RestaurantCard;
