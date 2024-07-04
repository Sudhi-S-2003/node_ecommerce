import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card  from './card';
function Fetchall() {
    const [products, setProducts] = useState([]);

    const fetchInfo = () => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                setProducts(response.data);       
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products.map((product) => {
                    return  <Card key={product._id} product={product} />
                })}
            </div>
        </div>
    );
}

export default Fetchall;
