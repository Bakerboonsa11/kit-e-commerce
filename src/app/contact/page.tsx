'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="container text-center py-5">
      <h2 className="mb-4">Let's Connect</h2>
      <p className="mb-5 text-muted">Feel free to reach out through any of the platforms below.</p>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark fs-1">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary fs-1">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary fs-1">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-danger fs-1">
          <FaInstagram />
        </a>
        <a href="mailto:you@example.com" className="text-danger fs-1">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
