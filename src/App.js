 
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './Components/Home/HomeContainer/HomeContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OurClasses from './Components/OurClasses/OurClasses';
import Catagories from './Components/Home/Catagories/Catagories';
import NavBar from './Components/ShareComponents/Navbar/NavBar';
 
import Pricing from './Components/Pricing/Pricing';
import MemberShip from './Components/MemberShip/MemberShip';
 import {Provider} from 'react-redux'
import store from './Redux/Store/Store';
function App() {
  return (
    <div >
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <HomeContainer></HomeContainer>
          </Route>
          <Route path="/classes">
            <OurClasses></OurClasses>
          </Route>
          <Route path="/services">
          <HomeContainer></HomeContainer>
          </Route>
          <Route path="/about">
          <HomeContainer></HomeContainer>
          </Route>
 
 
          <Route path ="/membership">
              <MemberShip></MemberShip>
          </Route>
 
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
        </Switch>
        
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
