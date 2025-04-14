'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart } from '@/store/cartSlice';
import styles from './cart.module.css';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.cartBox}>
        <h2 className={styles.title}>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty 😞</p>
        ) : (
          <div className={styles.itemList}>
            {cartItems.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <img
                    src='/fproduct1.png'
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
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
