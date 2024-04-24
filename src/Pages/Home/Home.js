import React from "react";
import Navbar from "../../components//Navbar/Navbar.js";
import "./Home.css";
import Footer from "../../components/Footer/Footer.js";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import car1 from "../../img/car1.jpg";
import car2 from "../../img/car2.jpg";
import car3 from "../../img/car3.jpg";
import profile1 from "../../img/profile1.jpg";
import logoInstagram from "../../img/logoInstagram.png";
import deezer from "../../img/deezer.jpg";
import spotify from "../../img/spotify.jpg";


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
        <div className="last-squad">
          <h2>LAST SQUAD</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra neque porttitor
            suspendisse nisi. Cursus posuere dui lorem etiam bibendum elementum
            ullamcorper. Orci nunc bibendum blandit mauris purus velit. Lacus in
            a id curabitur quam volutpat sed mus fusce. Enim vel quis senectus
            facilisi pellentesque neque fermentum rutrum cursus. Enim in et diam
            diam sed. Felis lectus sit elit nunc amet lectus mi ridiculus. Nulla
            facilisi dictum est tincidunt faucibus consequat nunc in lacinia.
            Nunc adipiscing volutpat aliquet est suspendisse scelerisque neque.
            Mattis tortor pellentesque vulputate et in ultrices mollis enim.
            Congue suspendisse ullamcorper eu mattis. Elit sociis rutrum ut
            viverra lectus tincidunt.
          </p>
          <p>
            Pellentesque accumsan praesent eget amet orci senectus urna auctor
            neque. Lacus a facilisis amet justo mauris. Pretium amet enim dictum
            nisl. Euismod sollicitudin sed erat placerat. Enim egestas tellus
            cursus nibh eros. Nulla venenatis eget vitae diam faucibus
            adipiscing arcu. Nisl auctor nunc purus vestibulum euismod. Amet
            tempus sit eu malesuada. Vestibulum cursus sed praesent in dictumst
            metus. Non senectus turpis venenatis interdum ultrices ut faucibus
            natoque amet. Consectetur sed sed porttitor massa ut lacus. Varius
            ridiculus dolor consectetur feugiat cras faucibus accumsan convallis
            aliquam. Euismod et libero felis malesuada. Euismod sed sapien
            venenatis blandit diam vel nec morbi viverra.
          </p>
        </div>

        <Container-fluid>
          <Row className="custom-row">
            <Col className="custom-col">
              <div className="profile-item">
                <img src={profile1} alt="Profile 1" className="profile-image" />
                <h3>John Doe</h3>
                <p>
                  Description de John Doe, breakdancer talentueux avec plus de
                  10 ans d'expérience.
                </p>
                <a
                  href="https://www.instagram.com/johndoe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoInstagram}
                    alt="Instagram"
                    className="instagram-logo"
                  />
                </a>
              </div>
            </Col>
            <Col className="custom-col">
              <div className="profile-item">
                <img src={profile1} alt="Profile 2" className="profile-image" />
                <h3>Jane Doe</h3>
                <p>
                  Description de Jane Doe, passionnée de breakdance depuis son
                  enfance.
                </p>
                <a
                  href="https://www.instagram.com/janedoe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoInstagram}
                    alt="Instagram"
                    className="instagram-logo"
                  />
                </a>
              </div>
            </Col>
            <Col className="custom-col">
              <div className="profile-item">
                <img src={profile1} alt="Profile 3" className="profile-image" />
                <h3>Mike Smith</h3>
                <p>
                  Description de Mike Smith, champion national de breakdance.
                </p>
                <a
                  href="https://www.instagram.com/mikesmith/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoInstagram}
                    alt="Instagram"
                    className="instagram-logo"
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="custom-row">
            <Col className="custom-col">
              <div className="profile-item">
                <img src={profile1} alt="Profile 4" className="profile-image" />
                <h3>Sarah Williams</h3>
                <p>
                  Description de Sarah Williams, danseuse étoile dans le monde
                  du breakdance.
                </p>
                <a
                  href="https://www.instagram.com/sarahwilliams/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoInstagram}
                    alt="Instagram"
                    className="instagram-logo"
                  />
                </a>
              </div>
            </Col>
            <Col className="custom-col">
              <div className="profile-item">
                <img src={profile1} alt="Profile 5" className="profile-image" />
                <h3>Chris Johnson</h3>
                <p>
                  Description de Chris Johnson, innovateur du breakdance avec
                  des mouvements uniques.
                </p>
                <a
                  href="https://www.instagram.com/chrisjohnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoInstagram}
                    alt="Instagram"
                    className="instagram-logo"
                  />
                </a>
              </div>
            </Col>
            <Col className="custom-col">
              <div className="profile-item">
                <img src={profile1} alt="Profile 6" className="profile-image" />
                <h3>Emily Brown</h3>
                <p>
                  Description de Emily Brown, jeune prodige du breakdance avec
                  un avenir prometteur.
                </p>
                <a
                  href="https://www.instagram.com/emilybrown/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoInstagram}
                    alt="Instagram"
                    className="instagram-logo"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container-fluid>
        <div className="Project">
          <h2>Le but du projet</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra neque porttitor
            suspendisse nisi. Cursus posuere dui lorem etiam bibendum elementum
            ullamcorper. Orci nunc bibendum blandit mauris purus velit. Lacus in
            a id curabitur quam volutpat sed mus fusce. Enim vel quis senectus
            facilisi pellentesque neque fermentum rutrum cursus. Enim in et diam
            diam sed. Felis lectus sit elit nunc amet lectus mi ridiculus. Nulla
            facilisi dictum est tincidunt faucibus consequat nunc in lacinia.
            Nunc adipiscing volutpat aliquet est suspendisse scelerisque neque.
            Mattis tortor pellentesque vulputate et in ultrices mollis enim.
            Congue suspendisse ullamcorper eu mattis. Elit sociis rutrum ut
            viverra lectus tincidunt.
          </p>
          <p>
            Pellentesque accumsan praesent eget amet orci senectus urna auctor
            neque. Lacus a facilisis amet justo mauris. Pretium amet enim dictum
            nisl. Euismod sollicitudin sed erat placerat. Enim egestas tellus
            cursus nibh eros. Nulla venenatis eget vitae diam faucibus
            adipiscing arcu. Nisl auctor nunc purus vestibulum euismod. Amet
            tempus sit eu malesuada. Vestibulum cursus sed praesent in dictumst
            metus. Non senectus turpis venenatis interdum ultrices ut faucibus
            natoque amet. Consectetur sed sed porttitor massa ut lacus. Varius
            ridiculus dolor consectetur feugiat cras faucibus accumsan convallis
            aliquam. Euismod et libero felis malesuada. Euismod sed sapien
            venenatis blandit diam vel nec morbi viverra.
          </p>
        </div>
        <div className="playlist">
          <h2> Les différentes playlists proposées : </h2>
          <br></br>
          <Container>
            <Row>
              <Col>
                <a
                  href="https://www.spotify.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={spotify}
                    alt="playlist spotify"
                    className="spotify"
                  />
                </a>
              </Col>
             
              <Col>
                <a
                  href="https://www.deezer.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={deezer}
                    alt="playlist spotify"
                    className="deezer"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
