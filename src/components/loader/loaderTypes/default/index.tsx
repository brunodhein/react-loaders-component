import React from 'react'

import {LoaderProps} from '../../index'

import './styles.css'

const DefaultLoader: React.FC<LoaderProps> = ({id, title}) => {
  return (
    <div id={id} className="container-loader" style={{display: "none"}}>
      <div className="loader-default">
        <div className="loader-inner-default">
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  )
}

export default DefaultLoader