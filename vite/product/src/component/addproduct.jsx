import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';


function BasicExample() {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    quantity: 1,
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value    });
  };

  const  handleSubmit = async(e) => {
    e.preventDefault();
   
    console.log(formData.image);
    try {
        const response = await axios.post('http://localhost:8000/api/product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        setFormData({
            name: '',
            price: 0,
            quantity: 1,
            description: '',
            image: null
          });
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <Container>
    <h1 className='text-center text-primary '>Add Product</h1>
    <Form className="m-auto p-4" style={{ maxWidth: '400px', backgroundColor: 'aqua' }} onSubmit={handleSubmit} encType='multipart/form-data'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name of Product</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Product Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min={1}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Product Quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min={1}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
       
        <Form.Control
          type="text" as="textarea"
          placeholder="Enter Product Description"
          name="description"
        
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          name="image"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default BasicExample;
