import React from 'react';
import Rating from '../components/Rating';
import data from '../data';


function ProductScreen(props) {
    const product = data.product.find((x) => x._id === props.match.params.id);
    if(!product) {
        return(
            <div>Not Found Product</div>
        )
    }
    return (
       <div className="row">
           <div className="col-2">
             <img className="large" src="data:image/jpeg;base64,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" alt={product.name} ></img>
           </div>
           <div className="col-1">
               <ul>
                   <li><h1>{product.name}</h1></li>
                   <li>
                   <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
                   </li>
                   <li>Price : $ {product.price} </li>
                   <li>Description {product.description} </li>
               </ul>
           </div>
           <div className="col-1">
               <div className="card card-body">
                   <ul>
                       <li>
                           <div className="row">
                               <div>Price</div>
                               <div className="price">${product.price} </div>                            
                           </div>
                       </li>
                       <li>
                           <div className="row">
                               <div>Status</div>
                              <div>
                              {product.countInstock>0? (<span className="success">In Stock</span>):
                               (<span className="error">Unavailable</span>)
                               } 
                              </div>
                            </div>                            
                           
                       </li>
                       <li>
                           <button className="primary block">Add to Cart</button>
                       </li>
                   </ul>
               </div>
           </div>
       </div>
    );
}

export default ProductScreen;