import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const close = <FontAwesomeIcon size='2x' className='icon' icon={faWindowClose} />

// const pages = [
//   'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_051.jpg?mode=max&quality=90&scale=down',
//   'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_052.jpg?mode=max&quality=90&scale=down',
//   'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_053.jpg?mode=max&quality=90&scale=down',
//   'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_054.jpg?mode=max&quality=90&scale=down',
//   'https://car-images.bauersecure.com/pagefiles/68068/1752x1168/speedtail_056.jpg?mode=max&quality=90&scale=down'
// ]

const PhotoCarousel = ({pages, clickHandle}) => {
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  return props.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
    <span onClick={clickHandle} className='x-span'>{close}</span>
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
    </animated.div>
  ))
}

export default PhotoCarousel;