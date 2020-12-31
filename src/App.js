import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Frontend/Home/Home";
import Schedule from "./pages/Frontend/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import CreateGroup from './pages/Backend/CreateGroup/CreateGroup';
import Group from './pages/Backend/Group/Group';
import AllGroups from './pages/Backend/AllGroups/AllGroups';
import LoginRegister from "./pages/Backend/LoginRegister/LoginRegister";
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import './App.css';

function App() {
  return (
  <>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path='/schedule/:ageGroup' component={Schedule} />
        </Switch>
      <Footer />
    </Router>

    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/backendhome" exact  component = {AllGroups} />
          <PrivateRoute path="/CreateGroup" component = {CreateGroup} />
          <PrivateRoute path="/scheduledata/:ageGroup" component = {Group} />
          <Route path="/LoginRegister" component={LoginRegister} />
        </Switch>
      </Router>
    </AuthProvider>
</>
  );
}

export default App;



