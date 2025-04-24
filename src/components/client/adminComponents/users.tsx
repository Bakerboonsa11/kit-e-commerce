"use client";
import React, { useState } from 'react';
import styles from '../../../styles/users.module.css';
import axios from 'axios';

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

const UserDataPage = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/user');
      console.log(response.data); // Log the response to see its structure

      // Check if the response contains the data we expect
      if (Array.isArray(response.data.instanceFiltered)) {
        setUserList(response.data.instanceFiltered); // Set userList with fetched data
      } else {
        console.error('Expected instanceFiltered to be an array');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const handleDelete = async (userId: string) => {
    try {
      console.log(userId)
      await axios.delete(`/api/user/${userId}`);
      setUserList(userList.filter((user) => user._id !== userId)); // Remove deleted user from state
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Update user info
  const handleUpdate = async (userId: string) => {
    // Placeholder for update functionality
    console.log("Update user with ID:", userId);
    // Implement logic for updating user here
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-5 text-primary fw-bold">All User Data & Credentials</h1>
        <p className="text-muted">This page shows the structure of User Data.</p>
        <button className="btn btn-success mb-3" onClick={fetchUsers}>
          Fetch All Users
        </button>
      </div>

      {/* User list table */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center">
                  <p className="text-muted">Loading users...</p>
                </td>
              </tr>
            ) : userList.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  <p className="text-muted">No users found. Click "Fetch All Users" to load data.</p>
                </td>
              </tr>
            ) : (
              userList.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email || 'N/A'}</td>
                  <td>{user.role || 'N/A'}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString() || 'N/A'}</td>
                  <td>
                    <button className="btn btn-primary me-2" onClick={() => handleUpdate(user._id)}>
                      Update
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDataPage;
