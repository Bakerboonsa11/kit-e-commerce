"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';


const ShoppingPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
const [AllProducts, setAllProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/product');
        if (!res || !res.data || !res.data.instanceFiltered) {
          alert("There was a problem fetching data");
        } else {
          setAllProducts(res.data.instanceFiltered);
           console.log(res.data.instanceFiltered);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  const filteredProducts = AllProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    console.log(product.category === category)
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="container py-4">
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
            <option value="football boots">football boots</option>
            <option value="football jersey">football jersey</option>
            <option value="gym materials">gym materials</option>
            <option value="gym clothing">gym clothing</option>
            <option value="athlete shoes">athlete shoes</option>
            <option value="training kit">training kit</option>
            <option value="football gear">football gear</option>

            <option value="boxing gear">boxing gear</option>
            <option value="basketball jersey">basketball jersey</option>
            <option value="sports accessories">sports accessories</option>
            <option value="table tennis gear">table tennis gear</option>
             <option value="badminton gear">badminton gear</option>
            <option value="cricket gear">cricket gear</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={product._id}>
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
                  <Link className="btn btn-sm btn-outline-primary" href={`/shop/kits/${product._id}`}>Show Details</Link>
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


























