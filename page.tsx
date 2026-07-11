export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* HEADER */}
      <header className="p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-center">100 PERAK</h1>
      </header>

      {/* APLIKASI ANTRIAN */}
      <main className="p-4">
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Aplikasi Antrian</h2>
          <p>Ini aplikasi kamu min 🔥</p>
        </div>
      </main>

      {/* CARA BERMAIN */}
      <section className="p-4">
        <h2 className="text-xl font-bold mb-2">Cara Bermain</h2>
      </section>

      {/* FOOTER */}
      <footer className="p-4 border-t border-gray-800 text-center">
        <p>© 2026 100 Perak</p>
      </footer>
    </div>
  )
}
