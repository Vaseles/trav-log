import React from 'react';
import Slider from '../components/Slider';
import Collection from '../components/collection';

function Home() {
  return (
    <div className = "home">
      <div className="room"></div>
      <Slider />
      <Collection/>
    </div>
  )
}

export default Home