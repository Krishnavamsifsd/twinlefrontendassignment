import Navbar from "./components/NavBar";
import "./App.css";
import ProductGrid from "./components/ProductGrid";
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  

  const handleChange = (event, value) => {
    setCurrentPage(value);
    
  };
  const handleSort = (order) => {
    setSortOrder(order);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products?page=${currentPage}`
        );
        const data = await response.json();
        let sortedData = data.products;
        if (sortOrder === "asc") {
          sortedData = sortedData.sort(
            (a, b) => a.mrp.mrp - b.mrp.mrp
          );
        } else if (sortOrder === "desc") {
          sortedData = sortedData.sort(
            (a, b) => b.mrp.mrp - a.mrp.mrp
          );
        }
        setProducts(sortedData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage, sortOrder]);

 

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <button
        className="sidebar-toggle"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <FontAwesomeIcon icon={faCircleXmark} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faFilter} size="2x" />
        )}
      </button>

      <div className="container">
        {showSidebar && (
          <div className="sidebar">
            <SideBar products={products} onSort={handleSort} />
          </div>
        )}
        <div className="main-content">
          <div className="product-grid-container">
            <ProductGrid products={products}  />
          </div>
          <br />
  

        </div>
      </div>
      <div>
      <div
  className="pagination-container"
  
>
  <Pagination
    count={280}
    page={currentPage}
    onChange={handleChange}
    variant="outlined"
    shape="rounded"
  />
</div>
      </div>
    </>
  );
}

export default App;
