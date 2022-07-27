import './App.css';
import React from 'react'
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Takenote2 from './components/takenote2/Takenote2';
import Dashboard from './pages/dashboard/Dashboard';
import Drawer1 from './components/drawer/drawer';
import Router1 from './routers/router';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {


  return (
    <div className="App">
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Dashboard /> */}
      {/* <Drawer1 /> */}

      <Provider store={store}>
        <Router1 />
      </Provider>


    </div>
  );
}

export default App;
