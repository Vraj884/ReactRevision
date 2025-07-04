import React, { useState } from 'react';
import Modal from './component/Modal.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-amber-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Hello from Modal!</h2>
        <p className="text-gray-700 mb-4">
          This modal uses React Portal and Tailwind CSS.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
