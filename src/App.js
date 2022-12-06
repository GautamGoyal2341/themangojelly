import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Header from './components/Header';
function App() {
  return (
    <>
   
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart' element={<CardsDetails />} />
   </Routes>
  </>
  );
}

export default App;
