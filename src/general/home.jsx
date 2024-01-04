// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'Bootstrap/dist/css/bootstrap.min.css';

// const Home = () => {
//   return (
//     <div className="container  mx-0 w-100" style={{ width: '100%' }}>
//       {/* <header className="text-center">
//         <h1>Welcome to Sweet Delights</h1>
//         <p className="lead">Explore our delightful cake designs for every occasion</p>
//       </header> */}

//       <Carousel interval={5000} pause={false}  >
//         <Carousel.Item>
//           <img src="../../public/cakes_images/cake6.jpg" className="d-block w-100" alt="Cake 1" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src="../../public/cakes_images/cake7.jpg" className="d-block w-100" alt="Cake 2" />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img src="../../public/cakes_images/cake8.jpg" className="d-block w-100" alt="Cake 3" />
//         </Carousel.Item>
//       </Carousel>

//       {/* <section className="row mt-5">
//         ... (Card components remain unchanged)
//       </section> */}

//       <section className="mt-5">
//         <h2 className="text-center">About Us</h2>
//         <p className="text-center">
//           At Sweet Delights, we strive to create the most delectable and visually stunning cakes
//           for your special moments. Our skilled bakers use only the finest ingredients to ensure a
//           delightful experience with every bite.
//         </p>
//       </section>

//       <footer className="mt-5 text-center">
//         <p>&copy; 2023 Sweet Delights. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const carouselItemStyle = {
    height: '3%',
    maxHeight: '100vh',  // Ensures the images don't exceed the viewport height
    objectFit: 'center',  // Maintains the aspect ratio and covers the entire carousel item
  };

  return (
    <div className="container-fluid p-0" style={{ minHeight: '100vh' }}>
      <Carousel style={{ height: '100%' }} interval={5000} pause={false}>
        <Carousel.Item>
          <img
            src="../../public/cakes_images/cake6.jpg"
            className="d-block w-100"
            alt="Cake 1"
            style={carouselItemStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../public/cakes_images/cake7.jpg"
            className="d-block w-100"
            alt="Cake 2"
            style={carouselItemStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../public/cakes_images/cake8.jpg"
            className="d-block w-100"
            alt="Cake 3"
            style={carouselItemStyle}
          />
        </Carousel.Item>
      </Carousel>

      <div className="container mt-5">
        <section>
          <h2 className="text-center">About Us</h2>
          <p className="text-center">
            At Sweet Delights, we strive to create the most delectable and visually stunning cakes
            for your special moments. Our skilled bakers use only the finest ingredients to ensure a
            delightful experience with every bite.
          </p>
        </section>

        <footer className="mt-5 text-center">
          <p>&copy; 2023 Sweet Delights. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
