import React from 'react'

import {Loader,ShowLoader} from '../../components/loader'

function Landing() {
  window.onload = (()=>{
    ShowLoader()
  })
  return (
    <div className="container-landing">
      <Loader title="Loading..."/>
    </div>
  )
}

export default Landing