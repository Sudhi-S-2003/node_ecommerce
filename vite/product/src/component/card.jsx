import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom'; 

function BasicExample(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <Col>
    <Card style={{ width: '17rem'}} className='m-2'>
    <div onClick={toggleDropdown} className='product-option-container' > 
          <Card.Img
            variant="top"
            src={`http://localhost:8000/${props.product.image}`}
            style={{ height: '17rem', objectFit: 'contain', cursor: 'pointer' }}
          />
          <ul  className={dropdownOpen ? 'product-option show' : 'product-option'}>
          <li><Link to={`update/${props.product._id}`}>Update Product</Link></li>
          {/* Example of another link */}
          <li><Link to={`delete/${props.product._id}`}>Delete Product</Link></li>
          </ul>
    </div>

      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>
        {props.product.description}
        </Card.Text>
        <Card.Title>₹{props.product.price}/- only</Card.Title>
        <Button variant="primary">Buy</Button>
      </Card.Body>
          </Card>
    </Col>
  );
}

export default BasicExample;