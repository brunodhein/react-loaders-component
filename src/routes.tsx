import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import {Loader} from './components/loader'

function Routes() {
  return (
    <BrowserRouter>
    <Route path='/' exact render={() =><Loader title='Loading'/>}/>
    </BrowserRouter>
   )
}

export default Routes