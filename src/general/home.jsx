import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const carouselItemStyle = {
    height: '3%',
    maxHeight: '90vh',  
    objectFit: 'center ',  
  };

  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh' }}>
      <Carousel style={{ height: '100%' }} interval={5000} pause={false}>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704667889/american-heritage-chocolate-vdx5hPQhXFk-unsplash_tqcym0.jpg"
            className="d-block w-100"
            alt="Cake 1"
            style={carouselItemStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704672113/cake6_ckahp9.jpg"
            className="d-block w-100"
            alt="Cake 2"
            style={carouselItemStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704667883/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash_ga4ir0.jpg"
            className="d-block w-100"
            alt="Cake 3"
            style={carouselItemStyle}
          />
        </Carousel.Item>
      </Carousel>

      <div class="row align-items-center justify-content-between mt-2">
        <div class="col-lg-6">
          <img height="500" src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704667881/velizar-ivanov-rXB9YjOQX8I-unsplash_shqzdb.jpg" alt="cake" class="mb-3" />
        </div>
        <div className='col-lg-6 text-center px-6'>
          <img height="200" src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704361073/logo_jqwev5.jpg" alt="cake" class="mb-3" />
          <p class="px-4">
            Celebrations are transitions; moments marking the passage of time or a change in identity.
            When I make your cake, I’m holding in mind the purpose of your celebration, be it a wedding,
            a birthday, or anniversary, what it was like to speak with you, sit with you and the importance
            of sharing my art at this monumental time in your life.
          </p>
        </div>
      </div> 

<div class="row align-items-center justify-content-between">
    <div class="col-lg-4 d-flex align-items-stretch mb-4">
        <img height="500" src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704671373/diana-polekhina-i5BY6W2ttts-unsplash_wnkemu.jpg" alt="cake" class="w-100" />
    </div>

    <div class="col-lg-4 text-center d-flex flex-column justify-content-center mb-4">
        <h2 class="mb-3">About Us</h2>
        <p class="mb-0">
            At Boutique Cakes, we strive to create the most visually stunning and delightful cakes for your special moments.
            Our skilled bakers use only the best ingredients to ensure a delightful experience with every bite.
        </p>
    </div>

    <div class="col-lg-4 d-flex align-items-stretch mb-4">
        <img height="500" src="https://res.cloudinary.com/dwwvof9x3/image/upload/v1704671377/deva-williamson-HHebuDYjP4I-unsplash_b6tfpo.jpg" alt="cake" class="w-100" />
    </div>
</div>


      <div className="container mt-5">
        {/* <section>
          <h2 className="text-center">About Us</h2>
          <p className="text-center">
            At Sweet Delights, we strive to create the most delectable and visually stunning cakes
            for your special moments. Our skilled bakers use only the finest ingredients to ensure a
            delightful experience with every bite.
          </p>
        </section> */}

        <footer className="mt-5 text-center">
          <p>&copy; 2024 Boutique Cakes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
