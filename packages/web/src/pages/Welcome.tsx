import React, {useState} from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

import {HelloWorld} from '@monoapp/shared/components/HelloWorld';

export function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col gap-12">
      <HelloWorld />

      <div className="flex w-full items-center justify-center gap-12">
        <a className="h-24 w-24" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-full" alt="Vite logo" />
        </a>
        <a className="h-24 w-24" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-full" alt="React logo" />
        </a>
      </div>

      <div className="flex w-full flex-col gap-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Vite + React</h1>

        <div className="card">
          <button
            className="cursor-pointer rounded bg-indigo-700 px-4 py-2 text-white"
            onClick={() => setCount(state => state + 1)}>
            count is {count}
          </button>
        </div>

        <p className="prose text-midnight bg-bubble-gum p-1">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <p className="text-indigo-600">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </main>
  );
}
