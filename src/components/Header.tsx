'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

const Header: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mb-4 text-right">
      {user ? (
        <>
          <span className="mr-4">Welcome, {user.name}!</span>
          <Link href="/api/auth/logout" className="text-blue-500 hover:text-blue-700">Logout</Link>
        </>
      ) : (
        <Link href="/api/auth/login" className="text-blue-500 hover:text-blue-700">Login</Link>
      )}
    </div>
  );
};

export default Header;