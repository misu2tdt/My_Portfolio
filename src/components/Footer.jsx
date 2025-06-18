import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Tran Duong Tien. All rights reserved.
      </p>
      <p className="text-sm text-gray-500">
        Thank you for visiting. I hope you found something interesting in my portfolio!
      </p>
    </footer>
  );
}
