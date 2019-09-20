import React from 'react';
import logo from './logo.svg';
import './css/bootstrap/bootstrap-grid.css';
import './css/bootstrap/bootstrap-reboot.css'
import './css/css/mixins/_text-hide.css';
import './css/animate.css';
import './css/aos.css';
import './css/bootstrap-datepicker.css'
import './css/open-iconic-bootstrap.min.css'
import './css/bootstrap.min.css'
 import  './css/icomoon.css'
  import './css/flaticon.css'
 import './css/jquery.timepicker.css'
 import './css/style.css'
 import { Route, Switch } from "react-router-dom"
 import TrangChu from './container/TrangChu'
 import Bg1 from './images/bg_1.jpg'

function App() {
  return (
    <Switch>
      <Route path = '/' exact component ={TrangChu} />
    </Switch>
  )
}
   
export default App;
