"use client";
import React from "react";
import { useSession } from "next-auth/react";
import styles from "../../styles/profile.module.css";

const ProfilePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div className={styles.loading}>Loading...</div>;
  if (!session) return <div className={styles.error}>Access Denied. Please sign in.</div>;

  const user = session.user;

  return session?.user?.role === "user" ? (
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
    <div>Admin Dashboard</div>
  );
};

export default ProfilePage;
