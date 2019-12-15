import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Page/Home'
import Rooms from './Page/Rooms'
import Error from './Page/Error'
import Navbar from './Components/Navbar'
// import Test from './Components/Test'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/error' exact component={Error} />
        <Route component={Error} />
      </Switch>
      {/* <Test/> */}
    </>
  );
}

export default App;
