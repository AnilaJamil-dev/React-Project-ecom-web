import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {
  return (
    <div className="container-fluid mb-5 mt-5">
    <Carousel data-bs-theme="dark" >
      <Carousel.Item interval={1000}>
        <div className='container '>
        <img 
          className="d-block  "
          src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwArwSXTX8VOZQ72hOVB0qDMGYn5MccnqtJtlVlxIfhysA_OkT'
          alt="First slide"
        />
 </div>

       
        <Carousel.Caption>
          <h3  className='text-dark '>50% Off For Your First Shopping</h3>
          <p className='text-dark '>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
      <div className='container '>
        <img
          className="d-block"
          src="https://648e99873722947deac636f5--sage-dusk-64ff08.netlify.app/images/SlideCard/slide-2.png"
          alt="Second slide"
        />
 </div>

        <Carousel.Caption>
          <h3>50% Off For Your First Shopping</h3>
          <p className='text-dark '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container '>
        <img
          className="d-block "
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNuWfDcRecPDAyyeNVQmCvKjjMg1B_Vb-XFVSb245hJEFXzsbe"
          alt="Third slide"
        />
 </div>

        <Carousel.Caption>
          <h3 className='text-dark '>50% Off For Your First Shopping</h3>
          <p className='text-dark '>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container '>
        <img
          className="d-block "
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT29ECRRJjZGs-3662PLemhw1sfHV2K9kLRQaHZGaZ0YLhhvBcM"
          alt="Fourth slide"
        />
 </div>

        <Carousel.Caption>
          <h3 className='text-dark '>50% Off For Your First Shopping</h3>
          <p className='text-dark '>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

