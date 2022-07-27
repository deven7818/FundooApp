import { Switch } from '@mui/material'
import React from 'react'
//import { BrowserRouter , Route, Switch } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard'
import Signin from '../pages/signin/Signin'
import Signup from '../pages/signup/Signup'

function Router1() {
    return (
        <div>
            {/* <BrowserRouter>
                <Switch>
                     <Route exact path="/" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/dashboard" component={Dashboard}/> 
                </Switch>
                </BrowserRouter > */}

            <Router>
                <Routes>
                    <Route exact path="/" element={<Signin/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Router1