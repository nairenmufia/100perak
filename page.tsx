"use client"
import { useState } from "react"

export default function Home() {
  const [antrian, setAntrian] = useState(1)
  const [dipanggil, setDipanggil] = useState(0)

  const tambahAntrian = () => setAntrian(antrian + 1)
  const panggilBerikutnya = () => {
    if(dipanggil < antrian - 1) setDipanggil(dipanggil + 1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-blue-50">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">🔥 100 PERAK 🔥</h1>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 w-full max-w-md text-center">
        <p className="text-gray-500 mb-2">Nomor Antrian</p>
        <p className="text-8xl font-bold text-blue-600">{antrian - 1}</p>
        <button onClick={tambahAntrian} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Ambil Antrian
        </button>
      </div>

      <div className="bg-green-100 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <p className="text-gray-500 mb-2">Sedang Dipanggil</p>
        <p className="text-8xl font-bold text-green-600">{dipanggil}</p>
        <button onClick={panggilBerikutnya} className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl">
          Panggil Berikutnya
        </button>
      </div>
    </main>
  )
}
