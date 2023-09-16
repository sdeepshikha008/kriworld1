import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

// Libraries
import Row from 'react-bootstrap/Row';

function TopBar(props) {
  return (
    <div className={`topbar ${props.className || ''}`}>
      <div className={props.containerSize}>
        <Row>
          <div className="topbar-inner">
            <ul className="top-info">
              <li>
                <Link to="mailto:letstalk@hisoft.com">
                  <i className="far fa-envelope"></i>harishgupta@kriworld.com
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fas fa-map-marker-alt"></i>4400 Bayou Blvd
Pensacola FL 32503
                </Link>
              </li>
            </ul>
            <ul className="top-menu">
              {/* <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/blog">News & Media</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default TopBar;
