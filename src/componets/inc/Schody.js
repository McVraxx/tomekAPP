import React from "react";
import tom03 from "../images/schody1.jpg";
import tom02 from "../images/ogrodzenie2.jpg";
import tom01 from "../images/ogrodzenie4.jpg";
import tom04 from "../images/ogrodzenie5.jpg";
import tom05 from "../images/ogrodzenie6.jpg";
import tom06 from "../images/ogrodzenie7.jpg";
import tom07 from "../images/ogrodzenie8.jpg";
import tom08 from "../images/ogrodzenie9.jpg";
import tom09 from "../images/ogrodzenie10.jpg";
<link href="path/to/lightbox.css" rel="stylesheet" />;

function Schody() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="jumbotron bg-light text-center">
          <h1 className="display-4 text-capitalize">GALERIA</h1>
          <p className="lead">Schody</p>

          <div className="row">
            <div className="col-lg-6 mb-3">
              <a data-lightbox="mygallery" data-title="Caption Here">
                <img src={tom01} alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col-lg-6 mb-3">
              <a data-lightbox="mygallery" data-title="Caption Here">
                <img src={tom02} alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col-lg-8 mb-3">
              <a data-lightbox="mygallery" data-title="Caption Here">
                <img src={tom03} alt="..." className="img-fluid" />
              </a>
            </div>

            <div className="col-lg-4 px-0">
              <div className="col-lg-12 mb-3">
                <a data-lightbox="mygallery" data-title="Caption Here">
                  <img src={tom04} alt="..." className="img-fluid" />
                </a>
              </div>
              <div className="col-lg-12 mb-3">
                <a data-lightbox="mygallery" data-title="Caption Here">
                  <img src={tom05} alt="..." className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-6 mb-3">
              <a data-lightbox="mygallery" data-title="Caption Here">
                <img src={tom06} alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col-lg-6 mb-3">
              <a data-lightbox="mygallery" data-title="Caption Here">
                <img src={tom07} alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col-lg-4 px-0">
              <div className="col-lg-12 mb-3">
                <a data-lightbox="mygallery" data-title="Caption Here">
                  <img src={tom08} alt="..." className="img-fluid" />
                </a>
              </div>
              <div className="col-lg-12 mb-3">
                <a data-lightbox="mygallery" data-title="Caption Here">
                  <img src={tom09} alt="..." className="img-fluid" />
                </a>
              </div>
            </div>

            <div className="col-lg-8 mb-3">
              <a data-lightbox="mygallery" data-title="Caption Here">
                <img src={tom04} alt="..." className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="path/to/lightbox.js"></script>
    </div>
  );
}

export default Schody;
