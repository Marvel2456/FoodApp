import './App.css';
import BottomNav from './components/BottomNav';
import FoodList from './components/FoodList';
import Search from './components/Search';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="w-full items-center justify-center pt-7 bg-white">
      <section className='md:px-[500px]'>
        <Topbar />
        <Search />
        <FoodList name='Potato Chips with Chicken' price='25.00' />
        <FoodList name='Beef fried rice' price='40.00' />
        <FoodList name='Chicken fried rice' price='40.00' />
        <FoodList name='Beef jollof' price='40.00' />
        <FoodList name='Chicken jollof' price='40.00' />
        <BottomNav />
          
          
      </section>
    </div>
  );
}

export default App;
