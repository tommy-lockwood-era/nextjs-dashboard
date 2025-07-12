"use client"
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div>
        <button className="bg-black text-white px-6 py-4 rounded-lg" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}