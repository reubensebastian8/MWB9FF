import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 border-t mt-8">
      <div className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} VendPro Machines. All rights reserved.<br/>
        <span className="italic">Your partner in automated refreshment.</span>
      </div>
    </footer>
  );
}

export default Footer; 