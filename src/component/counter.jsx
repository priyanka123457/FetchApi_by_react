import { useState,useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Task6() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);

  async function dataFetch() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products); // Fix API response
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛒 Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3  mb-4" key={product.id}>
            <div className="card h-50 shadow-lg border-0">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="fw-bold text-primary fs-5">💲{product.price}</p>
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task6;
