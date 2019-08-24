import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const bars = <FontAwesomeIcon className='icon' icon={faBars} />

function App() {
  return (
    <div className="App">
      <div className='front-page-container'>
      {/* <img className='img' src='https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_050.jpg?mode=max&quality=90&scale=down' alt='car' /> */}
      <div className='sidebar'>
        <div className='top-side'>
        <p>{bars} McLaren Speedtail</p>
    </div>
      </div>
      <div className='content-container'>
        <input placeholder='Search by model' />
        <div className='car-title'>
          <h1 className='h1-color'>Heir To the Throne</h1>
          <h1>McLaren Speedtail</h1>
          <h1>Unveiled</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
