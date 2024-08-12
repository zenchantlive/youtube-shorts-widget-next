import YouTubeShortsWidget from '@/components/YouTubeShortsWidget';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">YouTube Shorts Widget Creator</h1>
      <Header />
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
