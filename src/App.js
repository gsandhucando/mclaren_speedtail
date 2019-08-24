import React, {useState} from 'react';
import './App.scss';

import PhotoCarousel from './PhotoCarousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faImages } from '@fortawesome/free-solid-svg-icons'

const bars = <FontAwesomeIcon className='icon' icon={faBars} />
const imgs = <FontAwesomeIcon className='icon' icon={faImages} />

function App() {

  let [showPics, setShowPics] = useState(false)

  let styles= {
    background: {
      backgroundImage: 'url("https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_050.jpg?mode=max&quality=90&scale=down")'
    },
    showPhotos: {
      opacity: 1,
      visibility: 'visible'
    },
    hidePhotos: {
      opacity: 0,
      visibility: 'hidden'
    }
  }

  const pages = [
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_051.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_052.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_053.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_054.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_056.jpg?mode=max&quality=90&scale=down'
  ]

  const clickHandle = () => {
    setShowPics(!showPics)
    console.log('clicked')
  }

  return (
    <div className="App" style={styles.background}>
      <div className='front-page-container'>
      {/* <img className='img' src='https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_050.jpg?mode=max&quality=90&scale=down' alt='car' /> */}
      <div className='sidebar'>
        <div className='top-side'>
        <div style={showPics ? styles.showPhotos : styles.hidePhotos} className='photos'>
        <PhotoCarousel clickHandle={clickHandle} pages={pages} />
      </div>
        <p>{bars} McLaren Speedtail</p>
    </div>
      </div>
      <div className='content-container'>
        <input placeholder='Search by model' />
        <div className='car-title'>
          <h1 className='h1-thin'>Heir To the Throne</h1>
          <h1 className='h1-bold'>McLaren Speedtail</h1>
          <h1>Unveiled</h1>
        </div>
        <div onClick={clickHandle} className='btn-container'>
      <div className='img-btn'>{imgs}</div>
      <p>View Photos</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
