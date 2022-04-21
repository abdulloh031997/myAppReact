import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Costumer from '../pages/Costumer'
import Dashboard from '../pages/Dashboard'
const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/costumer' component={Costumer}/>
    </Switch>
  )
}

export default Routes