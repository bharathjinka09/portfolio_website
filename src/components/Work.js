import React, { useState, useEffect } from 'react';
import { Animate } from 'react-simple-animate';
import image1 from './assets/img-1.jpg';
import image2  from './assets/img-2.jpg';
import image3  from './assets/img-3.jpg';

const Work = () => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(play => !play)
  }, [])


  return (
    <>
    <div id="work" className='skills'>
      Work:
    </div>

    <div className='work mb-4'>
    <div className='row'>

    <div className='col'>

    <Animate
    play={play}
    duration={2}
    delay={1}
    start={{
      opacity:0
    }}
    end={{ opacity:1 }}
    >
  <div className='card'>
    <img src={image1} className='card-img-top' alt='image 1'/>
      <div className='card-body'>
      <h5 className='card-title'>Project 1</h5>
      <p className="card-text">A CRUD web app to track and store contracts</p>
      <a href='#' className='btn btn-success m-1'>Live</a>
      <a href='#' className='btn btn-success m-1'>Code</a>
        </div>
      </div>
    </Animate>


  </div> 
  <div className='col'>
  <Animate
    play={play}
    duration={2}
    delay={2}
    start={{
      opacity:0
    }}
    end={{ opacity:1 }}
    >
    <div className='card'>
    <img src={image2} className='card-img-top' alt='image 1'/>
      <div className='card-body'>
      <h5 className='card-title'>Project 2</h5>
      <p className="card-text">Project 2</p>
      <a href='#' className='btn btn-success m-1'>Live</a>
      <a href='#' className='btn btn-success m-1'>Code</a>
        </div>
      </div>
</Animate>

  </div>
  <div className='col'>
  <Animate
    play={play}
    duration={2}
    delay={3}
    start={{
      opacity:0
    }}
    end={{ opacity:1 }}
    >
    <div className='card'>
    <img src={image3} className='card-img-top' alt='image 1'/>
      <div className='card-body'>
      <h5 className='card-title'>Project 3</h5>
      <p className="card-text">A CRUD web app to track and store contracts</p>
      <a href='#' className='btn btn-success m-1'>Live</a>
      <a href='#' className='btn btn-success m-1'>Code</a>
        </div>
      </div>
      </Animate>


  </div>
  </div>
  </div>
    </>
  )
}

export default Work
