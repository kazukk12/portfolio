"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Kazuma Kobayashi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
