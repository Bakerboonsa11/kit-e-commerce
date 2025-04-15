'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart } from '@/store/cartSlice';
import styles from './cart.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Cart() {
  const { data: session, status } = useSession();
  
  const [loading,setLoading]=useState(false)
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
   const formatPhone = (localPhone: string) => {
  if (localPhone.startsWith('0')) {
    return '+251' + localPhone.slice(1);
  }
  return localPhone;
};
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const productIds=cartItems.map((iteam)=>{
    return iteam._id
  })


  const pay = async () => {
    setLoading(true);
    const phone = formatPhone('0912345678');
    console.log("id of products are ",productIds)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        email:session?.user?.email,
        amount:totalAmount,
        first_name:`${session?.user?.name}`,
        phone,
        productIds
        
      }),
    });
    const data = await res.json();
    window.location.href = data.checkout_url;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartBox}>
        <h2 className={styles.title}>Your Cart</h2>

        {cartItems.length === 0 ? (
          <div>
              <p className={styles.empty}>Your cart is empty 😞</p>
           <Link href="/shop" className="btn btn-primary">
                ⬅️ Back to Shop
              </Link>
          </div>
        
        ) : (
          <div className={styles.itemList}>
            {cartItems.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <img
                    src={`/products/${item.images[1]}`}
                    alt={item.name}
                    className={styles.image}
                  />
                  <div>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.category}>{item.category}</p>
                    <p>Qty: {item.quantity}</p>
                    <p className={styles.price}>${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <p className={styles.total}>Total: ${totalAmount.toFixed(2)}</p>
            <button className={styles.checkoutBtn} onClick={pay} disabled={loading}>{loading ? 'Redirecting...' : 'Pay with Chapa'}</button>
          </div>
        )}
      </div>
    </div>
  );
}
