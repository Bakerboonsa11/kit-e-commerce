'use client';

import React, { useEffect, useState } from 'react';
import styles from '../../../styles/approveTran.module.css';

interface Product {
  _id: string;
  name: string;
  price: number;
  status: string;
}

// Static sample products (payment status = success)
const sampleProducts: Product[] = [
  { _id: '1', name: 'iPhone 14 Pro', price: 1099, status: 'success' },
  { _id: '2', name: 'MacBook Air M2', price: 1299, status: 'success' },
  { _id: '3', name: 'AirPods Max', price: 549, status: 'success' },
];

const ApproveTranPage = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts); // Use static products
  const [message, setMessage] = useState('');

  // Keeping fetch logic in case needed later
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products?status=success');
      const data = await res.json();
      // setProducts(data); // Temporarily not used
    } catch (error) {
      setMessage('Failed to fetch products.');
    }
  };

  useEffect(() => {
    // fetchProducts(); // Disabled for now
  }, []);

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}/approve`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'paid' }),
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((product) => product._id !== id));
        setMessage('Product approved successfully ✅');
      } else {
        const result = await res.json();
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('Something went wrong approving product.');
    }
  };

  return (
    <div className={styles.container}>
     <h1 className={styles.title}>Products Waiting for Approval</h1>


      {message && <p className={styles.message}>{message}</p>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price.toFixed(2)}</td>
                <td>{product.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(product._id)}
                    className={styles.approveButton}
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No products pending approval.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveTranPage;
