import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold">HUDUMA GRID</h1>
      <p className="text-gray-600 mt-2 text-center">Last Mile OS for Kenya - MSME + County + M-Pesa</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-xl">
        <Link href="/msme/dashboard" className="bg-black text-white p-6 rounded text-center hover:bg-gray-800">
          <h2 className="font-bold text-lg">SmartDuka</h2>
          <p className="text-sm mt-1">Sell Offline - MSME</p>
          <p className="text-xs mt-2 opacity-70">Click to test offline sales</p>
        </Link>
        <Link href="/county/dashboard" className="bg-green-700 text-white p-6 rounded text-center hover:bg-green-800">
          <h2 className="font-bold text-lg">County Revenue</h2>
          <p className="text-sm mt-1">View Collections</p>
          <p className="text-xs mt-2 opacity-70">Coming next</p>
        </Link>
      </div>

      <div className="mt-10 border p-4 rounded bg-white w-full max-w-xl">
        <h3 className="font-bold">Project Status:</h3>
        <p className="text-sm mt-1">✅ Offline-First PWA - WORKING</p>
        <p className="text-sm">✅ MSME Dashboard - WORKING</p>
        <p className="text-sm">⏳ County Dashboard - Next</p>
        <p className="text-sm">⏳ M-Pesa Daraja</p>
        <p className="text-sm">⏳ USSD *384#</p>
      </div>
    </div>
  )
}