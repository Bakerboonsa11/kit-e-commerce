'use client';

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../../styles/approveTran.module.css';

interface Product {
  _id: string;
  status: string;
  amount: string;
  tx_ref: string;
  productIds: string[];
}

const ApproveTranPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');
  const [deliveredIds, setDeliveredIds] = useState<string[]>([]);

  const fetchedTrans = async () => {
    try {
      const res = await fetch('/api/transction?status=paid');
      const data = await res.json();
      console.log('✅ transactions data are:', data);
      if (data?.data) {
        setProducts(data.data);
      } else {
        setMessage('No products found.');
      }
    } catch (error) {
      setMessage('Failed to fetch products.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchedTrans();
  }, []);

  const handleDeliver = async (id: string) => {
    try {
      const res = await fetch(`/api/transction/${id}/approve`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'delivered' }),
      });

      if (res.ok) {
        setDeliveredIds((prev) => [...prev, id]);
        setMessage('Product is assigned as Delivered ✅');
      } else {
        const result = await res.json();
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('Something went wrong approving product.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Transactions Waiting for Approval</h1>

      {message && <p className="alert alert-info">{message}</p>}

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Amount ($)</th>
              <th>Status</th>
              <th>Transaction Reference (tx_ref)</th>
              <th>Product IDs</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id || 'Unknown'}</td>
                  <td>{product.amount || 'Unknown'}</td>
                  <td>{product.status}</td>
                  <td>{product.tx_ref}</td>
                  <td>
                    {product.productIds.length > 0
                      ? product.productIds.join(', ')
                      : 'No products'}
                  </td>
                  <td>
                    {deliveredIds.includes(product._id) ? (
                      <button className="btn btn-secondary btn-sm" disabled>
                        Delivered
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDeliver(product._id)}
                        className="btn btn-success btn-sm"
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No transactions pending approval.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveTranPage;
