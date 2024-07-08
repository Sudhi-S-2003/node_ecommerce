import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from './form.jsx'
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
    <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default BasicExample;
