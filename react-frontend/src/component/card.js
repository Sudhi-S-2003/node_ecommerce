import React from 'react';

function Card(props) {
  return (
    
          <div className="col-md-3 col-sm-6" key={props.product._id}>
            <div className="container">
              <div className="card text-center border-2 border-warning" style={{ maxWidth: "300px" }}>
                <div className="card-body">
                  <img src={`http://localhost:8000/${props.product.image}`} alt="product" className="card-img-top"/>
                  <h2 className="card-title text-primary">{props.product.name}</h2>
                  <p className="card-text">
                    {props.product.description}
                    <br/>
                    <span className="fw-light text-decoration-none ">₹{props.product.price}/- only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        
  );
}

export default Card;
