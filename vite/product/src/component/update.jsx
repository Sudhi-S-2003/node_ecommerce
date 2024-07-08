import { useEffect, useState } from 'react';
import Form from './form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function Update() {
  const { id } = useParams(); 
  const [data, setData] = useState({
    name: '',
    price: 0,
    quantity: 1,
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]:  value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      const response = await axios.put(`http://localhost:8000/api/product/${id}`, data);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
    <h1 className='text-center text-primary '>Add Product</h1>
    <Form formData={data} handleChange={handleChange} handleSubmit={handleSubmit} update={true} />
    </Container>
    
  );
}

export default Update;
