import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import "./Histoire.css";
import Footer from "../../components/Footer/Footer.js";

export default function Histoire() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>L'histoire du Breakdance</h1>
        </header>
        <main>
          <section className="intro">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dolor risus eget in
              gravida eget. Condimentum nisi aliquet eget mauris lacus hac.
              Tellus eu duis amet fringilla. Semper duis quis ac at eu praesent
              elementum.
            </p>
            <div className="images">
              <img src="image1.jpg" alt="Breakin'" />
              <img src="image2.jpg" alt="Wild Style" />
              <img src="image3.jpg" alt="Beat Street" />
              <img src="image4.jpg" alt="Flashdance" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas pellentesque sed
              libero cursus morbi nisi mauris fermentum. Augue ullamcorper
              mauris pharetra aliquam a gravida. Fringilla turpis sapien dictum
              auctor pellentesque.
            </p>
          </section>
          <section className="artists">
            <section className="content">
              <div className="text-block">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin ultrices
                  pellentesque vivamus massa nibh diam ac elit. Quam sed amet
                  massa sagittis sit dolor auctor magna cras.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin ultrices
                  pellentesque vivamus massa nibh diam ac elit. Quam sed amet
                  massa sagittis sit dolor auctor magna cras.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin ultrices
                  pellentesque vivamus massa nibh diam ac elit. Quam sed amet
                  massa sagittis sit dolor auctor magna cras.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin ultrices
                  pellentesque vivamus massa nibh diam ac elit. Quam sed amet
                  massa sagittis sit dolor auctor magna cras.
                </p>
                <p>
                  Ullamcorper ullamcorper netus tellus congue. Vitae lacus enim
                  cum turpis quisque duis curabitur. Odio aliquet orci at lacus.
                </p>
              </div>
              <div className="image-block">
                <img src="image5.jpg" alt="Break Dancer" />
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
