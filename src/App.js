 
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
import ClassDetail from './Components/ClassDetails/ClassDetail';
import ShareHeader from './Components/ShareComponents/ShareHeader/ShareHeader';
import Footer from './Components/ShareComponents/Footer/Footer';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import Contact from './Components/Home/Contact/Contact';
function App() {
  return (
    <div >
      <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <HomeContainer></HomeContainer>
          </Route>
          <Route exact path="/classes">
            <OurClasses></OurClasses>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
           <ShareHeader title="Our Services"></ShareHeader>
           <Catagories></Catagories>
           <Footer></Footer>
          </Route>
          <Route path="/about">
          <ShareHeader title="About Us"></ShareHeader>
            <AboutUs></AboutUs>
           <Footer></Footer>
          </Route>
 
 
          <Route path ="/membership">
              <MemberShip></MemberShip>
          </Route>
          <Route path="/classes/detail/:id">
            <ClassDetail/>
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
