'use client';

import React, { useState } from 'react';
import styles from '../../../styles/updateUser.module.css';

interface ProductData {
  name: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  brand: string;
}

const DeleteProduct = () => {
  const [toBeDeletedProduct, settoBeDeletedProduct] = useState<ProductData | null>(null);
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');


  const handleIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();

    if (res.ok && data) {
      settoBeDeletedProduct(data);
    
      setMessage('');
    } else {
      setMessage('Product not found with the provided ID.');
    }
  };

 

 

  return (
    <div>
     
        <form onSubmit={handleIdSubmit} className={styles.form}>
          <h2>Enter Product ID to delete</h2>

          <label htmlFor="id">Product ID</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <button type="submit">delete Product</button>

          {message && <p className={styles.message}>{message}</p>}
        </form>
      
    </div>
  );
};

export default DeleteProduct;
