"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import AdminDashboard from '../../components/client/adminDashboard';
import styles from "../../styles/profile.module.css";
import axios from "axios";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const [role, setRole] = useState(null);

  // Always call hooks before any early return
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${session?.user?.email}`);
        setRole(response.data?.data.role);
        console.log(response.data.data)
        console.log("role is",role)
      } catch (error) {
        console.log(error);
      }
    };

    if (session?.user?.email) {
      fetchUser();
    }
  }, [session]);

  if (status === "loading") return <div className={styles.loading}>Loading...</div>;
  if (!session) return <div className={styles.error}>Access Denied. Please sign in.</div>;

  const user = session.user;

  return role === "user" ? (
    <div className={styles.profileWrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img
            src={user?.image || "/default-avatar.png"}
            alt="User Avatar"
            className={styles.avatar}
          />
          <div>
            <h2 className={styles.name}>{user?.name}</h2>
            <p className={styles.email}>{user?.email}</p>
          </div>
        </div>

        <div className={styles.details}>
          <h3>About</h3>
          <p>
            Passionate full-stack developer focused on crafting clean, user-friendly experiences.
            Always learning, always building.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <AdminDashboard />
  );
};

export default ProfilePage;
