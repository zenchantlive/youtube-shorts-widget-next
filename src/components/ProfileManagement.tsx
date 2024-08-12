'use client';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const ProfileManagement: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
      <div className="mb-4">
        <strong>Name:</strong> {user.name}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {user.email}
      </div>
      {/* Add more profile information or management options here */}
    </div>
  );
};

export default ProfileManagement;