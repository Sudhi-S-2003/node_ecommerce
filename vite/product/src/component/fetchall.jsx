import { useState ,useEffect} from 'react'
import axios from 'axios'
import Card from './card.jsx'
import Container from 'react-bootstrap/Container';
function App() {
  const [product,fetchProduct]=useState([])
    const fetchinfo =()=>{
      return axios.get('http://localhost:8000/api/products')
        .then((response) => response.data).then(
            (data) => {
                console.log(data) ;
            fetchProduct(data);       
        }
        ).catch((error) => {
                console.log(error)
                })
    }
    useEffect(()=>{
        fetchinfo()
    },[])
   
  return (
    
    <>
     <Container>
    <h1 className='text-center text-primary '>Product List</h1>
     {
        product.map((product) => {
            return (
              <Card  key={product._id} product={product} />
                
            )
        })}
</Container>
    </>

  )
}

export default App
