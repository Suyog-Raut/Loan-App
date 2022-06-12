import React from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Page from './pages/Page'
import Data from './pages/Data'

const App = () => {

  return (
    <BrowserRouter >
    <Switch >
     <Route path="/" component={LandingPage } exact/>
     <Route path="/application" component={Page } exact/>
     
     <Route path="/data" component={Data } exact/>
     </Switch>
    </BrowserRouter>
  )
}


export default App
