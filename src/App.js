import React, { Fragment } from 'react';
import Menu from './Components/Menu'
import './App.css'

const App = ({ children }) => (
  <div >
    <Fragment >
      <Menu />
    {children}
    </Fragment>
  </div>
);

export default App;
