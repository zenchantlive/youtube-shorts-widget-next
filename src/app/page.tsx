import { getSession } from '@auth0/nextjs-auth0';
import YouTubeShortsWidget from '@/components/YouTubeShortsWidget';
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
      <YouTubeShortsWidget />
    </main>
  );
}
