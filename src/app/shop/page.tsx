"use client"
import React, { useState } from 'react';

// Sample product data
const sampleProducts = [
  { id: 1, name: 'Red Sports Shirt', price: 30, category: 'Clothing', image: '/shirt.jpg' },
  { id: 2, name: 'Black Running Shoes', price: 80, category: 'Footwear', image: '/shoes.jpg' },
  { id: 3, name: 'Blue Gym Bag', price: 45, category: 'Accessories', image: '/bag.jpg' },
  { id: 4, name: 'Sweatband Set', price: 12, category: 'Accessories', image: '/sweatband.jpg' },
  { id: 5, name: 'Track Pants', price: 50, category: 'Clothing', image: '/pants.jpg' },
];

const ShoppingPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h2 className="text-center fw-bold mb-4">Shop All Products</h2>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src='/fproduct2.png'
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title mb-2">{product.name}</h6>
                  <p className="text-primary fw-semibold">${product.price}</p>
                  <button className="btn btn-sm btn-outline-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
