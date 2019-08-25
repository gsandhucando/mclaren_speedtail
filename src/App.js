import React, {useState} from 'react';
import './App.scss';

import PhotoCarousel from './PhotoCarousel';
import Artical from './Artical';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faImages } from '@fortawesome/free-solid-svg-icons'

const bars = <FontAwesomeIcon className='icon-bar' icon={faBars} />
const imgs = <FontAwesomeIcon className='icon' icon={faImages} />

function App() {

  let [showPics, setShowPics] = useState(false)

  let styles= {
    background: {
      backgroundImage: 'url("https://images.caradisiac.com/images/2/0/6/1/172061/S0-mclaren-speedtail-les-premieres-images-en-avance-569652.jpg")'
    },
    showPhotos: {
      opacity: 1,
      visibility: 'visible'
    },
    hidePhotos: {
      opacity: 0,
      visibility: 'hidden'
    },
    nextPage: {
      backgroundImage: 'url("https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_astral.jpg?mode=max&quality=90&scale=down")'
    }
  }

  const pages = [
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_051.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_052.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_053.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_054.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_056.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_057.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_058.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_059.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_061.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_062.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_066.jpg?mode=max&quality=90&scale=down',
    'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_070.jpg?mode=max&quality=90&scale=down'
  ]

  const clickHandle = () => {
    setShowPics(!showPics)
    console.log('clicked')
  }

  return (
    <div className="App" >
      <div style={styles.background} className='front-page-container'>
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
        <div className='top-search-price'>
        <input placeholder='Search by model' />
        </div>
        <div className='title-price-container'>
        <div className='car-title'>
          <h1 className='h1-thin'>Heir To the Throne</h1>
          <h1 className='h1-bold'>McLaren Speedtail</h1>
          <h1>Unveiled</h1>
        </div>
        <div className='price'>
        <img className='price-img' src='https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_050.jpg?mode=max&quality=90&scale=down' alt='car' />
        <p>$2.25 Million</p>
        </div>
        </div>
        <div onClick={clickHandle} className='btn-container'>
      <div className='img-btn'>{imgs}</div>
      <p>View Photos</p>
      </div>
      </div>
      </div>
      <Artical />
    </div>
  );
}

export default App;
