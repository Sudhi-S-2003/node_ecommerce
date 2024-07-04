import { useState ,useEffect} from 'react'
import './App.css'
import axios from 'axios'
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
     {
        product.map((product) => {
            return (
                <div key={product._id} className="card" style={{width: '18rem'}}
                >{product.name}</div>
            )
        })}

    </>

  )
}

export default App
