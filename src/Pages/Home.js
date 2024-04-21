import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import "./Home.css";
import Footer from "../components/Footer/Footer.js";

import Carousel from "react-bootstrap/Carousel";
import car1 from "../img/car1.jpg";
import car2 from "../img/car2.jpg";
import car3 from "../img/car3.jpg";

function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={car1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={car2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={car3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
