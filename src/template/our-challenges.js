import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../component/button/button';
import aboutImage from '../../src/assets/images/about/04.webp';

function OurChallenges() {
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
          <h4 className="mb-4">
            “Staying Updated with Evolving Technologies and Trends”
          </h4>
          <span className="d-flex align-items-center mb-4">
            <b className="text-secondary">Harish Gupta</b> - Owner
          </span>
          <p className="mb-4">
          Web technologies and design trends evolve rapidly. It's a challenge to keep up with the latest trends and ensure your team is proficient in using new technologies.
          </p>
          <Button btnClass="btn-primary-round" btnText="Contact Us" btnURL="/about-us" />
        </Col>
      </Row>
    </>
  );
}

export default OurChallenges;
