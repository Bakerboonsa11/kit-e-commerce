'use client';

import React, { useState } from 'react';
import styles from '../../../styles/createKit.module.css'
import axios from 'axios';
const CreateKit = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    discount: '',
    brand: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const kitData = {
      ...formData,
      price: parseFloat(formData.price),
      discount: formData.discount ? parseFloat(formData.discount) : 0,
      images: ['/default-image.jpg'], // default image
    };

    const res = await fetch('/api/kits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(kitData),
    });

    if (res.ok) {
      setMessage('✅ Kit created successfully!');
      setTimeout(() => {
         setMessage('')
      }, 4000);
      setFormData({
        name: '',
        description: '',
        category: '',
        price: '',
        discount: '',
        brand: '',
      });
    } else {
      const err = await res.json();
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Create New Kit</h2>

      <label htmlFor="name" className={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label htmlFor="description" className={styles.label}>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className={styles.textarea}
        rows={3}
      />

      <label htmlFor="category" className={styles.label}>Category</label>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label htmlFor="price" className={styles.label}>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <label htmlFor="discount" className={styles.label}>Discount (%)</label>
      <input
        type="number"
        name="discount"
        value={formData.discount}
        onChange={handleChange}
        className={styles.input}
        min="0"
        max="100"
      />

      <label htmlFor="brand" className={styles.label}>Brand</label>
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        className={styles.input}
      />

      <p className={styles.note}>Image will be set to default for now.</p>

      <button type="submit" className={styles.button}>Create Kit</button>

      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export default CreateKit;
