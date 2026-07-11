
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">Sales Dashboard</h1>
        <p className="mt-2 text-gray-500">
          View sales data for 2022, 2023, and 2024 with interactive charts.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}