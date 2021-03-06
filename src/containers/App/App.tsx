import React from 'react';
import './App.css';

import { CardList } from '../../components/CardList';

function App() {
  return (
    <main className="bg-blue-300 min-h-screen min-w-full">
      <section className="grid grid-rows-5 gap-4 max-w-md mx-auto min-h-screen p-4">
        <div className="row-span-1 text-gray-700 text-center bg-gray-400 px-4 py-2">
          Message
        </div>
        <div className="row-span-3">
          <CardList />
        </div>
        <div className="row-span-1 text-gray-700 text-center bg-gray-400 px-4 py-2">
          Progress
        </div>
      </section>
    </main>
  );
}

export default App;
