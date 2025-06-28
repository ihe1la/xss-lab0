import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Level1() {
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const err = searchParams.get('err');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ err: input });
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">🔐 Level 1: Login Error Echo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter something..."
          className="p-2 bg-gray-800 border rounded w-80"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 rounded">
          Submit
        </button>
      </form>
      {err && (
        <div
          className="mt-6 bg-red-900 p-4 rounded"
          dangerouslySetInnerHTML={{ __html: `Login failed: ${err}` }}
        ></div>
      )}
    </div>
  );
}
