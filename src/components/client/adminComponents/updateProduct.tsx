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

const UpdateProduct = () => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  const [isIdSubmitted, setIsIdSubmitted] = useState(false);

  const handleIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();

    if (res.ok && data) {
      setProductData(data);
      setIsIdSubmitted(true);
      setMessage('');
    } else {
      setMessage('Product not found with the provided ID.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!productData) return;
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productData) return;

    const res = await fetch(`/api/users`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    const result = await res.json();

    if (res.ok) {
      setMessage('Product updated successfully ✅');
    } else {
      setMessage(`Error: ${result.message}`);
    }
  };

  return (
    <div>
      {!isIdSubmitted ? (
        <form onSubmit={handleIdSubmit} className={styles.form}>
          <h2>Enter Product ID to Update</h2>

          <label htmlFor="id">Product ID</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <button type="submit">Search Product</button>

          {message && <p className={styles.message}>{message}</p>}
        </form>
      ) : (
        productData && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.formTitle}>Update Product</h2>

            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <label htmlFor="description" className={styles.label}>Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className={styles.textarea}
              rows={3}
            />

            <label htmlFor="category" className={styles.label}>Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <label htmlFor="price" className={styles.label}>Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <label htmlFor="discount" className={styles.label}>Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={productData.discount}
              onChange={handleChange}
              className={styles.input}
              min={0}
              max={100}
            />

            <label htmlFor="brand" className={styles.label}>Brand</label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              className={styles.input}
            />

            <p className={styles.note}>Image will be set to default for now.</p>

            <button type="submit" className={styles.button}>Update Product</button>

            {message && <p className={styles.message}>{message}</p>}
          </form>
        )
      )}
    </div>
  );
};

export default UpdateProduct;
