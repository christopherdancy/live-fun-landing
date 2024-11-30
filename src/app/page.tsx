/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-black to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle Animated Circles */}
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-700 opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-indigo-600 opacity-20 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center space-y-10">
        <div className="text-center px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Left Tent */}
          <span className="text-6xl">🎪</span>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold">
            Welcome to <span className="text-purple-400">Live.fun</span>
          </h1>
          
          {/* Right Tent */}
          <span className="text-6xl">🎪</span>
        </div>
      </div>
          <p className="text-lg font-light max-w-2xl mx-auto">
            Don’t just watch—<span className="font-bold">own a piece of your favorite creators' success</span>. By holding and trading creator tokens, you share in their future.
          </p>
          <p className="text-3xl font-bold text-white">
            Invest in Streams. Share the Wins.
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <a
              href="https://twitter.com/diamondogedad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-transform transform hover:scale-105 rounded-full py-4 px-10 inline-block text-lg font-bold shadow-lg"
            >
              🚀 DM @diamondogedad to claim your spot!
            </a>
          </div>
        </div>

        {/* Why Join Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Why Join?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-purple-800/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="block text-4xl mb-4">🌟</span>
              <p>Earn fees as fans trade your token—no matter if it goes up or down.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-purple-800/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="block text-4xl mb-4">🌟</span>
              <p>The only platform where fans engage with your content through tokens.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-purple-800/30 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="block text-4xl mb-4">🌟</span>
              <p>Early creators get an exclusive allocation of $LFG, our Live.fun platform tokens!</p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <p className="text-center text-lg mt-16 italic">
          Be your best self, create content that slaps, and let us handle the rest.
        </p>
      </div>
    </main>
  );
}

