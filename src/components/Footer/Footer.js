import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liens utiles</h6>
              <p>
                <a href="https://www.last-squad.com/" className="text-reset">
                  Site Officiel
                </a>
              </p>
              <p>
                <a
                  href="https://www.youtube.com/channel/UCdeJr4sjjOiuQ84zjoK8qzQ?view_as=subscriber"
                  className="text-reset"
                >
                  Youtube
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/Lastsquadcrew/about?locale=fr_FR"
                  className="text-reset"
                >
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/lastsquad_crew/?hl=fr"
                  className="text-reset"
                >
                  Instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="adresse" className="me-3" />
                Adresse : Bordeaux
              </p>
              <p>
                <MDBIcon color="secondary" icon="mail" className="me-3" />
                lasquadracrew@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> Omar
                Remichi : 06 52 60 54 30
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <Link to={`/admin`}>
                <p>Administrateur</p>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://www.last-squad.com">
          LastSquad
        </a>
      </div>
    </MDBFooter>
  );
}
