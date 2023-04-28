import "./ProductGrid.css";
import { FaShoppingCart } from "react-icons/fa";
import ProductDetails from "./productDetails";
import { useState } from "react";



function ProductGrid({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const alertmsg = () => {
    alert("Quantity updated succesfully");
  };

  const handleClick = (productId) => {
    const product = products.find((p) => p.name === productId);
    setSelectedProduct(product);
  };
  

  return (
    <>
      {selectedProduct ? (
        
        <ProductDetails product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        
      ) : (
      <div className="product-grid-container">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleClick(product.name)}>
            <img src={product.images.front} alt={product.name} />
            <h3>{product.name}</h3>

            <p>Description: {product.description}</p>
            <p>
              Price: <strong>{product.mrp.mrp} rs</strong>
            </p>
            <p>Company: {product.company_detail.name}</p>
            <p>
              Weight: {product.weights_and_measures.net_weight}
              <span> {product.weights_and_measures.measurement_unit}</span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                Qty{" "}
                <input
                  style={{ width: "70px", height: "23px", marginTop: "13px" }}
                  type="number"
                  placeholder="1"
                />
              </span>
              <button onClick={alertmsg}>
                {" "}
                Add <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
        
      </div>
    )}
    </>
  );
            }
export default ProductGrid;
