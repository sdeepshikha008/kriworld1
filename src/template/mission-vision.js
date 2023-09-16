import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../src/assets/images/about/01.webp';
import { InfoBox3 } from '../component/infobox';

function Missionvision() {
  return (
    <>
      <Row>
        <Col sm={5} className="mb-4 mb-sm-0">
          <img className="img-fluid" src={aboutImage} alt="" />
        </Col>
        <Col
          sm={7}
          className="align-self-start align-self-lg-center ps-md-0 ps-lg-5"
        >
          <InfoBox3
            extraClass="icon-sm mb-4"
            icon="flaticon-target"
            title="Our Mission"
            description="To deliver on the promise of technology and human ingenuity We help our clients become the next and best versions of themselves."
          />
          <InfoBox3
            extraClass="icon-sm mb-4"
            icon="flaticon-eye"
            title="Our Vision"
            description="Our vision is to be a transformative force in the web development industry, dedicated to empowering businesses and individuals through innovative and personalized website solutions."
          />
          <p>
          We envision a future where every website we create becomes a powerful digital asset, driving success, growth, and meaningful connections for our clients. Our commitment to excellence, creativity, and cutting-edge technology will remain unwavering as we continuously redefine the boundaries of web design and development.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Missionvision;
