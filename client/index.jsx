import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Apo from './components/Apo.jsx'

import 'bulma/css/bulma.css'
import './css/style.scss'


ReactDOM.render((
  <BrowserRouter>
    <Apo/>
  </BrowserRouter>
), document.getElementById('root'));