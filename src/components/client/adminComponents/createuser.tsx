'use client';

import React, { useState } from 'react';
import styles from '../../../styles/createUser.module.css';

export default function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      setMessage('User created successfully!');
      setTimeout(() => {
          setMessage(''); 
      }, 3000);
      setFormData({ name: '', email: '', role: 'user', password: '' });
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Create New User</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
      />

      <label>Email *</label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <label>Password *</label>
      <input
        type="password"
        name="password"
        required
        minLength={6}
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <label>Role</label>
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Create User</button>

      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
}
