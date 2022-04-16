import React from 'react'
import egg from '../../assets/images/desktop/image-transform.jpg'
import cup from '../../assets/images/desktop/image-stand-out.jpg'
// import cerezas from '../../assets/images/desktop/image-graphic-design.jpg'
// import mandarina from '../../assets/images/desktop/image-photography.jpg'

export const Section = () => {
  return (
    <div className='container-sect'>
      <div className="section1">

        <div className="left">
          <div className="text-container">
            <h1>Transform your brand</h1>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <div className='text-par'>
              <p id='one'>Learn more</p>
            </div>
          </div>
        </div>

        <div className='right'>
          <img src={ egg } alt="" />
        </div>
      </div>
      
      <div className="section2">
        <div className="left">
          <img src={ cup } alt="" />
        </div>
        <div className="right">
          <div className="text-container2">
            <h1>Stand out to the right audience</h1>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
          <div className="text-par">
            <p id='two'>Learn more</p>
          </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className='left-img'>
          <div className="text-section3-1">
            <h2>Graphic design</h2>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>

        <div className='right-img'>
          <div className="text-section3-2">
            <h2>Photography</h2>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
