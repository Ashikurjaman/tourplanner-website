
import { BrowserRouter , Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Myplan from './Component/Myplan/Myplan';
import Notfound from './Component/Notfound/Notfound';
import Package from './Component/Package/Package';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import SetPLane from './Component/SetPlane/SetPLane';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          
          <Route path="/home">
            <Home>

            </Home>
          </Route>
          <PrivateRoute exact path="/setplan">
            <SetPLane></SetPLane>
          </PrivateRoute>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/package">
            <Package></Package>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/myplan">
            <Myplan></Myplan>
          </PrivateRoute>
          <PrivateRoute exact path="/package/:packsId">
            <Package></Package>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
