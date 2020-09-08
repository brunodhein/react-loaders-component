import React from 'react'

import './styles.css'

import DefaultLoader from './loaderTypes/default'

export interface LoaderProps {
  title?: string,
  id?: string,
  type?: string
}

export const Loader: React.FC<LoaderProps> = ({title, id, type}) => {
  switch (type) {
    case 'two-circles':
        
    default:
      return(
        <DefaultLoader title={title} id={id}/>
      )
  }
}

export function ShowLoader(id?: string) {
  if(id) {
    const getLoader = document.querySelector(`#${id}`) as HTMLElement
    getLoader.style.display = 'flex'
  } else {
    const getLoader = document.querySelector('.container-loader') as HTMLElement
    getLoader.style.display = 'flex'
  }
}

export function HideLoader(id?: string) {
  if(id) {
    const getLoader = document.querySelector(`#${id}`) as HTMLElement
    getLoader.style.display = 'none'
  } else {
    const getLoader = document.querySelector('.container-loader') as HTMLElement
    getLoader.style.display = 'none'
  }
}

