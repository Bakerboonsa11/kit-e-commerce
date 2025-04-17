'use client';

import React, { useState } from 'react';
import styles from '../../../styles/updateUser.module.css';

interface User {

  name: string;
  email: string;
  role: string;
}

interface Props {
  userId: string;
}

const UpdateUserForm = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/users/${email}`);
    const data = await res.json();

    if (res.ok && data) {
      setUserData(data);
      setIsEmailSubmitted(true);
    } else {
      setMessage('User not found with the provided email.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!userData) return;
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/users`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    if (res.ok) {
      setMessage('User updated successfully ✅');
    } else {
      setMessage(`Error: ${result.message}`);
    }
  };

  return (
    <div>
      {!isEmailSubmitted ? (
        <form onSubmit={handleEmailSubmit} className={styles.form}>
          <h2>Enter Email to Update User</h2>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button type="submit">Search User</button>

          {message && <p className={styles.message}>{message}</p>}
        </form>
      ) : (
        userData && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Update User</h2>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              disabled
            />

            <label htmlFor="role">Role</label>
            <select name="role" value={userData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit">Update User</button>

            {message && <p className={styles.message}>{message}</p>}
          </form>
        )
      )}
    </div>
  );
};

export default UpdateUserForm;
