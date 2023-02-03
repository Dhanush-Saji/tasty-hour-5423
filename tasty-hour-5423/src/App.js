import TablePaginationDemo from './hooks/Pagination';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Navlist from './Components/Navlist/Navlist';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
   <Navbar/>
   <Navlist/>
    <AllRoutes />
    <Footer />
    </>
  );
}

export default App;
