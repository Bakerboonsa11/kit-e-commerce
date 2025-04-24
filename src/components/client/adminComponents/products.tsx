'use client';
import React, { useState } from 'react';
import styles from '../../../styles/users.module.css'; // Optional custom styling
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

type Product = {
  _id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
};

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/product');
      console.log("products from all", response.data.data);

      if (Array.isArray(response.data.instanceFiltered)) {
        setProducts(response.data.instanceFiltered);
      } else {
        console.error('Expected instanceFiltered to be an array');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      console.log("id to delete",productId)
      await axios.delete(`/api/product/${productId}`);
      setProducts(products.filter((p) => p._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdate = async (productId: string) => {
    console.log("Update product with ID:", productId);
    // Implement update logic here
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-5 text-primary fw-bold">All Products Data</h1>
        <p className="text-muted">This page shows all products as cards.</p>
        <button className="btn btn-success mb-3" onClick={fetchProducts}>
          Fetch All Products
        </button>
      </div>

      {loading ? (
        <p className="text-center text-muted">Loading Products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-muted">
          No products found. Click "Fetch All Products" to load data.
        </p>
      ) : (
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-3"
          style={{
            maxHeight: '70vh',
            overflowY: 'auto',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          {products.map((product) => (
            <div className="col" key={product._id}>
              <div className="card h-100 shadow-sm">
                {product.images?.length > 0 && (
                  <img
                    src={`/products/${product.images[1]}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary text-truncate">{product.name}</h5>
                  <p className="card-text small mb-2">
                    <strong>Brand:</strong> {product.brand}<br />
                    <strong>Category:</strong> {product.category}<br />
                    <strong>Price:</strong> ${product.price}<br />
                    <strong>Rating:</strong> ⭐ {product.ratingsAverage}
                  </p>
                  <div className="card-text overflow-auto" style={{ maxHeight: '60px' }}>
                    <small className="text-muted">{product.description}</small>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-white border-top-0">
                  <button className="btn btn-sm btn-primary" onClick={() => handleUpdate(product._id)}>
                    Update
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
