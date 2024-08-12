import { getSession } from '@auth0/nextjs-auth0';
import YouTubeShortsWidget from '@/components/YouTubeShortsWidget';
import ProfileManagement from '@/components/ProfileManagement';
import Link from 'next/link';

export default async function Home() {
  const { user } = await getSession() || {};

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">YouTube Shorts Widget Creator</h1>
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
      {user && <ProfileManagement />}
      <YouTubeShortsWidget />
      <div className="mt-8 text-center">
        <a
          href="https://buymeacoffee.com/zenchant"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Buy Me a Coffee
        </a>
      </div>
    </main>
  );
}
