import { restaurantsList } from '../../mock/dummyData';
import RestaurantCard from '../components/RestaurantCard';
import Search from '../components/Search';

const Dashboard = () => {
  return (
    <div className='page-container'>
      <Search />
      <div className='list'>
        {restaurantsList.map((restaurant) => (
          <RestaurantCard restaurantInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
