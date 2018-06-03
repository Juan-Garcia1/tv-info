import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import ShowInfo from './components/ShowInfo/ShowInfo'

const App = () => {
  return (
    <HashRouter>
      <Fragment>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/show-info/:id' component={ShowInfo} />
        </Switch>
      </Fragment>
    </HashRouter>
  )
}

export default App;
