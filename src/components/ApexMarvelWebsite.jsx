export default function ApexMarvelWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-900 to-black py-16 px-6 text-center">
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <div className="bg-zinc-900 p-4 rounded-3xl shadow-2xl border border-red-500">
            <img
              src="https://placehold.co/180x180/111111/ff0000?text=APEX+MARVEL"
              alt="Apex Marvel Logo 1"
              className="rounded-2xl"
            />
            <p className="mt-3 text-red-400 font-bold">Official Logo</p>
          </div>

          <div className="bg-zinc-900 p-4 rounded-3xl shadow-2xl border border-blue-500">
            <img
              src="https://placehold.co/180x180/111111/00aaff?text=GAMER+LOGO"
              alt="Apex Marvel Logo 2"
              className="rounded-2xl"
            />
            <p className="mt-3 text-blue-400 font-bold">Gaming Identity</p>
          </div>
        </div>
        <h1 className="text-5xl font-extrabold mb-4">APEX MARVEL 🔥</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Official Gaming Hub for Free Fire Shorts, Meme Edits, Gaming Community and More.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://youtube.com/@apexmarvel-u"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-2xl font-bold shadow-lg"
          >
            Subscribe on YouTube
          </a>

          <a
            href="https://wa.me/2348143556717"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-2xl font-bold shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Channel Stats */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Channel Analytics 📊</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-zinc-900 p-6 rounded-3xl shadow-xl text-center">
            <h3 className="text-2xl font-bold">21+</h3>
            <p className="text-gray-400">Subscribers</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl shadow-xl text-center">
            <h3 className="text-2xl font-bold">1.07K+</h3>
            <p className="text-gray-400">Total Views</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl shadow-xl text-center">
            <h3 className="text-2xl font-bold">Gaming Shorts</h3>
            <p className="text-gray-400">Main Content</p>
          </div>
        </div>
      </section>

      {/* Monetization Page */}
      <section className="py-12 px-6 bg-zinc-950">
        <h2 className="text-3xl font-bold mb-6 text-center">Monetization Goals 💰</h2>

        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-8 shadow-xl">
          <ul className="space-y-4 text-lg">
            <li>✅ 21 Subscribers</li>
            <li>🎯 Goal: 500 Subscribers</li>
            <li>🎯 Goal: 3M Shorts Views</li>
            <li>🔥 Growing Gaming Community</li>
          </ul>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Community 🎮</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-3">Join the Squad</h3>
            <p className="text-gray-400">
              Be part of the Apex Marvel gaming community for Free Fire clips, meme edits and gaming updates.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-3">Latest Content</h3>
            <p className="text-gray-400">
              Viral gaming Shorts, clutch moments and funny gameplay edits uploaded regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-12 px-6 bg-zinc-950">
        <h2 className="text-3xl font-bold mb-6 text-center">Collaborate 🤝</h2>

        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-8 shadow-xl text-center">
          <p className="text-lg text-gray-300 mb-6">
            Interested in gaming collaborations, shoutouts or edits?
          </p>

          <div className="space-y-3">
            <p className="text-red-400 font-bold">Phone: 08143556717</p>
            <p className="text-gray-400">YouTube: @Apex Marvel</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-zinc-800">
        © 2026 Apex Marvel Gaming. All rights reserved.

        <div className="mt-6 text-sm text-gray-400">
          <p>🌐 Deployment Ready Website</p>
          <p>Upload this project to Vercel, Netlify or GitHub Pages to make it public on Chrome.</p>
        </div>
      </footer>
    </div>
  );
}