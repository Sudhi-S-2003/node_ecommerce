import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function BasicExample(props) {
  return (
    <Col>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={`http://localhost:8000/${props.product.image}`} style={{ height: '17rem',objectFit:"contain"}}/>
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