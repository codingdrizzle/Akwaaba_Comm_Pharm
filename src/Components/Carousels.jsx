import { Carousel } from "react-bootstrap";
import img1 from "../Images/1.jpg";
import img2 from "../Images/2.jpg";
import img3 from "../Images/3.jpg";
import img4 from "../Images/4.jpg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpg";
import img8 from "../Images/8.jpg";

function Carousels() {
  return (
    <>
      <Carousel
        style={{ width: "75%", margin: "auto" }}
        indicators={false}
        pause={false}
      >
        <Carousel.Item>
          <div>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h1 style={{ fontWeight: "bolder" }}>WELCOME TO</h1>
            <h3 style={{ fontWeight: "bolder" }}>AKWAABA COMMUNITY PHARMACY</h3>
            <p>quality drugs at affordable price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3>Always Smile and Be Happy!</h3>
            <p>Happiness in healthy living</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>Vegetables are good for your health</h3>
            <p>
              Vegetables provide nutrients vital for health and maintenance of
              your body
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Exercising is a good practice for a healthy living</h3>
            <p>Regular exercise is good for bones and muscles lubrication</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Fifth slide" />
          <Carousel.Caption>
            <h3>Eating vegetables provides health benefits</h3>
            <p>
              People who eat more vegetables and fruits are likely to have a
              reduced risk of some chronic diseases.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img6} alt="Sixth slide" />
          <Carousel.Caption>
            <h3>Greens are healthy</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img7} alt="Seventh slide" />
          <Carousel.Caption>
            <h3>Fleshy fruits and vegetables should be your source of water</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img8} alt="Eight slide" />
          <Carousel.Caption>
            <h3>Eating vegetables provides health benefits</h3>
            <p>
              People who eat more vegetables and fruits are likely to have a
              reduced risk of some chronic diseases.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousels;
