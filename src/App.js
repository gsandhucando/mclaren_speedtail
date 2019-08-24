import React, {useState} from 'react';
import './App.scss';

import PhotoCarousel from './PhotoCarousel';

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
        <div className='top-search-price'>
        <input placeholder='Search by model' />
        </div>
        <div className='car-title'>
          <h1 className='h1-thin'>Heir To the Throne</h1>
          <h1 className='h1-bold'>McLaren Speedtail</h1>
          <h1>Unveiled</h1>
        </div>
        <div onClick={clickHandle} className='btn-container'>
      <div className='img-btn'>{imgs}</div>
      <p>View Photos</p>
      </div>
      <div className='press-container'>
        <div className='overview'>
        <div className='press-img-container'>
          <img src='https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_050.jpg?mode=max&quality=90&scale=down' alt='car' />
          <img src='https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_051.jpg?mode=max&quality=90&scale=down' alt='car' />
          </div>
          <div className='artical'>
          <h3>Overview</h3>
          <p>
          <span style={{color: '#A68E90', fontWeight: 'bold'}}>A</span>s the spiritual successor to the legendary McLaren F1, the 2020 McLaren Speedtail evokes similar desires with its one-of-a-kind design and out-of-this-world performance. The streamlined speedster is the fastest and most powerful McLaren ever built, and it represents the pinnacle of the company's exotic lineup.
          </p>
          <h3>Engine Ride and Handling</h3>
          <p>
          <span style={{color: '#A68E90', fontWeight: 'bold'}}>W</span>hile full powertrain details are unknown, we do know that the rear-drive 2020 Speedtail has a hybrid system that develops a total of 1035 horsepower courtesy of its gasoline engine and electric motors. Combined with an incredibly aerodynamic shape and ultra-lightweight construction, the Speedtail can reach a claimed top speed of 250 mph. Likewise, McLaren says it will accelerate from zero to 186 mph in 12.8 seconds. That makes it significantly quicker than the almighty McLaren P1, which did the deed in 16.5 seconds. It has a set of Pirelli P Zero tires that were specially developed to handle extreme speeds and wrap the staggered 20- and 21-inch wheels. The hybrid hypercar also can be lowered by 1.4 inches and includes a Velocity drive mode that optimizes aerodynamics and powertrain settings for high-speed runs.
          </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
