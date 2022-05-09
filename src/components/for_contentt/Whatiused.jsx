import React from 'react'

function Whatiused() {
  return (
    <div id = "use" className='whatiused'>
      <div className="room"></div>
      <h1>I Used </h1>
      <div className="whatiused__names">
        <a target="_blank" className='one right' href="https://jsonplaceholder.typicode.com/"><p >JSONPlaceholder</p></a>
        <a target="_blank" className='one left' href="https://swiperjs.com/"><p >Swiper</p></a>
      </div>
    </div>
  )
}

export default Whatiused