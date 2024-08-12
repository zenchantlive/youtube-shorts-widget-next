import YouTubeShortsWidget from '@/components/YouTubeShortsWidget';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">YouTube Shorts Widget Creator</h1>
      <YouTubeShortsWidget />
    </main>
  );
}
