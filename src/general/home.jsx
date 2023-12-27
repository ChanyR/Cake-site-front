import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap stylesheet
// import './Home.css'; // Import your custom CSS file

const Home = () => {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1>Welcome to Sweet Delights</h1>
        <p className="lead">Explore our delightful cake designs for every occasion</p>
      </header>

      <div id="cakeCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="cake1.jpg" className="d-block w-100" alt="Cake 1" />
          </div>
          <div className="carousel-item">
            <img src="cake2.jpg" className="d-block w-100" alt="Cake 2" />
          </div>
          <div className="carousel-item">
            <img src="cake3.jpg" className="d-block w-100" alt="Cake 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#cakeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#cakeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="row mt-5">
        {/* ... (Card components remain unchanged) */}
      </section>

      <section className="mt-5">
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
  );
}

export default Home;
