import React, { PureComponent } from 'react'
import logo from '../../assets/Images/carous1.jpg'
import logo2 from '../../assets/Images/carous2.jpg'
// import lamp from './lamp.jpeg'
// import prpogram from './program.jpeg'
import './CarouselStyle.css'
class Carousel extends React.Component {
  render() {
    return (
      <div className='crsl'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src={logo} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                {/* <h1 className="text" >Welcome to Shiv Academy </h1>
              <p className="text" > <b>Alumni Portal</b></p> */}
              </div>
            </div>
            <div class='carousel-item'>
              <img src={logo2} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h1 className='text'></h1>
                <p className='text'></p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={logo} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h1 className='text'></h1>
                <p className='text'></p>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Carousel
