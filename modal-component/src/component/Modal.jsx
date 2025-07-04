import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            };
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Close when clicking outside modal content
    const handleBackdropClick = (e) => {
        if (e.target.id === 'modal-backdrop') onClose();
    };

    return ReactDOM.createPortal(
        <div
            id="modal-backdrop"
            className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-md w-full mx-4">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('portal-root')
    );
};

export default Modal;
