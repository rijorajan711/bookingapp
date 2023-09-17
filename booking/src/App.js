import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/SingleHotel";
import HotelList from "./pages/HotelList";
import SingleHotel from "./pages/SingleHotel";

function App() {
  return (
 
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route> 
        <Route path="/hotel" Component={Hotel}></Route>
        <Route path="/hotellist" Component={HotelList}></Route>
        <Route path="/singlehotel" Component={SingleHotel}></Route>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
