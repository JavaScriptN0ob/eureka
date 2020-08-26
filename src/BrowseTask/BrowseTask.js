import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import { Browse } from './component/Browse';

function BrowseTask() {
  return (
    <div className="App">
      <Browse/>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default BrowseTask;
