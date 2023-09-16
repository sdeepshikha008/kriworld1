import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import Col from 'react-bootstrap/Col';

function CategoryList(props) {
  const categoryList1 = [
    { id: 1, text: 'HTML', textUrl: '#' },
    { id: 2, text: 'Asp.net', textUrl: '#' },
    { id: 3, text: 'Angular', textUrl: '#' },
 
  ];

  const categoryList2 = [
    { id: 1, text: 'CSS', textUrl: '#' },
    { id: 2, text: 'Bootstrap', textUrl: '#' },
    { id: 3, text: 'Laravel', textUrl: '#' },

  ];

  const categoryList3 = [
    { id: 1, text: 'Javascript', textUrl: '#' },
    { id: 2, text: 'React', textUrl: '#' },
    { id: 3, text: 'Vue.js', textUrl: '#' },
    
  ];

  const categoryList4 = [
    { id: 1, text: 'Php', textUrl: '#' },
    { id: 2, text: 'Python', textUrl: '#' },
    { id: 3, text: 'Express.js', textUrl: '#' },
  
  ];

  return (
    <>
      <Col lg={3} sm={6}>
        <ul className="category-list">
          {categoryList1.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={3} sm={6} className="mt-4 mt-sm-0">
        <ul className="category-list">
          {categoryList2.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={3} sm={6} className="mt-4 mt-lg-0">
        <ul className="category-list">
          {categoryList3.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={3} sm={6} className="mt-4 mt-lg-0">
        <ul className="category-list">
          {categoryList4.map((item, ind) => (
            <li key={ind}>
              {props.link ? (
                <Link to={item.textUrl}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Col>
    </>
  );
}

export default CategoryList;
