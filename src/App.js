
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import AddPlaces from './Components/AddPlaces/AddPlaces';


function App() {
  return (
    <div className="App">


      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/places/:placeId">
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>

            <PrivateRoute path="/addplaces">
              <AddPlaces></AddPlaces>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
