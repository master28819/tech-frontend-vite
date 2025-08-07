import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar />

      {/* Other page content here */}

      {/* Floating Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-50 text-sm px-4 py-2 rounded-md transition font-medium bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-md"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </>
  );
}

export default App;
