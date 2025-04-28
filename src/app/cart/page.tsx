'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeFromCart } from '@/store/cartSlice';
import styles from './cart.module.css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function Cart() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state?.cart.items);

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

  const productIds = cartItems.map((item) => item._id);

  const pay = async () => {
    if (status !== 'authenticated') {
      console.warn('User not authenticated');
      return;
    }

    setLoading(true);

    const phone = formatPhone('0912345678');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: session?.user?.email,
          amount: totalAmount,
          first_name: session?.user?.name,
          phone,
          productIds,
        }),
      });

      const data = await res.json();
      console.log('Redirecting to:', data.checkout_url);

      if (data?.checkout_url) {
        router.push(data.checkout_url);
      } else {
        console.error('Missing checkout_url in response:', data);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };
  // 



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
                    src={`/products/${item.images?.[1] || item.images?.[0] || 'default.png'}`}
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
            <button
              className={styles.checkoutBtn}
              onClick={pay}
              disabled={loading}
            >
              {loading ? 'Redirecting...' : 'Pay with Chapa'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
