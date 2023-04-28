import React from "react";
import './ProductDetails.css'



function ProductDetails({ product, onBack }) {
  return (
    
    <div className="product-details-container">
      <button onClick={onBack} className="back-button">Back</button>
      <div className="product-details-wrapper">
        <div className="product-details-image-container">
          <img className="product-details-image" src={product.images.front} alt={product.name} />
        </div>
        <div className="product-details-info-container">
          <h2>{product.company_detail.name}</h2>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.main_category}</p>
          <p className="product-details-price">
            Price: <strong>{product.mrp.mrp} rs</strong>
          </p>
          <p>
            Weight: {product.weights_and_measures.net_weight}
            <span> {product.weights_and_measures.measurement_unit}</span>
          </p>
          <div className="product-details-actions">
            <input type="number" placeholder="Quantity" min="1" max="10" style={{height:'20px'}}/>
            <button className="add-to-basket">Add to basket</button>
            <button className="save-for-later">Save for later</button>
          </div>
          
        </div>
      </div>
      
      
      <h4 style={{marginRight:'auto'}}>About Product</h4>
  <p style={{paddingLeft:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat</p>
    </div>
    
    
  );
}

export default ProductDetails;
