'use client';

import React, { useState } from 'react';
import styles from '../../styles/admin.module.css';
// COMPONENETS
 import CreateUserForm from './adminComponents/createuser'
 import UpdateUserForm from '../../components/client/adminComponents/updateUser'
 import CreateKit from '../client/adminComponents/addProduct'
 import UpdateProduct from '../../components/client/adminComponents/updateProduct'
 import DeleteProduct from '../../components/client/adminComponents/deleteProduct'
 import ApproveTranPage from './adminComponents/approveTransaction';
 import DeliveryCart   from './adminComponents/deliveryCart'
 import UserDataPage from './adminComponents/users'
 import AllProducts from './adminComponents/products'
// 
export default function AdminDashboard() {
  const [activePanel, setActivePanel] = useState('overview');
//   const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // store selected userId
 
  const renderPanel = () => {
    switch (activePanel) {
      case 'createUser':
        return <CreateUserForm/>;
   
    
      case 'approvetran':
        return <ApproveTranPage/>;
      case 'deliveryCart':
        return <DeliveryCart/>;
      case 'addProduct':
        return <CreateKit/> ;
     
      
      case 'users':
        return <UserDataPage/>;
      case 'transactions':
        return <div>transactions</div>;
      case 'products':
        return <AllProducts/>;
      default:
        return <div><h2>Welcome Admin</h2><p>Select an action from the sidebar.</p></div>;
    }
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h3 className={styles.title}>Admin Panel</h3>
        {[
           { key: 'users', label: 'Users' },
          { key: 'createUser', label: 'Create User' },
        
          
           { key: 'products', label: 'Products' },
          { key: 'addProduct', label: 'Add Product' },
        
           
         
            { key: 'approvetran', label: 'Approve Transaction' },
          { key: 'deliveryCart', label: 'Delivery Cart' },
          { key: 'transactions', label: 'Transactions' },

          
        ].map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.button} ${activePanel === key ? styles.active : ''}`}
            onClick={() => setActivePanel(key)}
          >
            {label}
          </button>
        ))}
      </aside>

      <main className={styles.mainContent}>
        {renderPanel()}
      </main>
    </div>
  );
}
