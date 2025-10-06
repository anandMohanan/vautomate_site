"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Add Tally type declarations
declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: any) => void;
    };
  }
}

interface TallyContextType {
  isLoading: boolean;
  openTallyForm: (formId: string, options?: any) => void;
  buttonId: string | null;
}

const TallyContext = createContext<TallyContextType | undefined>(undefined);

export const useTally = () => {
  const context = useContext(TallyContext);
  if (context === undefined) {
    throw new Error('useTally must be used within a TallyProvider');
  }
  return context;
};

interface TallyProviderProps {
  children: React.ReactNode;
}

export default function TallyProvider({ children }: TallyProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonId, setButtonId] = useState<string | null>(null);

  const openTallyForm = useCallback((formId: string, options: any = {}) => {
    setIsLoading(true);
    setButtonId(options.buttonId || 'default');

    // Check if Tally is available
    if (window.Tally) {
      const popupOptions = {
        layout: 'modal',
        width: 500,
        hideTitle: true,
        autoClose: 10000,
        onOpen: () => {
          setIsLoading(false);
          setButtonId(null);
        },
        onClose: () => {
          setIsLoading(false);
          setButtonId(null);
        },
        onSubmit: (payload: any) => {
          setIsLoading(false);
          setButtonId(null);
          showThankYouMessage();
        },
        ...options
      };

      window.Tally.openPopup(formId, popupOptions);
    } else {
      // Fallback: retry after a short delay
      setTimeout(() => {
        if (window.Tally) {
          window.Tally.openPopup(formId, {
            layout: 'modal',
            width: 500,
            hideTitle: true,
            autoClose: 10000,
            onOpen: () => {
              setIsLoading(false);
              setButtonId(null);
            },
            onClose: () => {
              setIsLoading(false);
              setButtonId(null);
            },
            onSubmit: (payload: any) => {
              setIsLoading(false);
              setButtonId(null);
              showThankYouMessage();
            },
            ...options
          });
        } else {
          setIsLoading(false);
          setButtonId(null);
          console.error('Tally script not loaded');
        }
      }, 1000);
    }
  }, []);

  const showThankYouMessage = () => {
    // Remove any existing thank you message
    const existingMessage = document.getElementById('tally-thank-you-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create thank you message element
    const message = document.createElement('div');
    message.id = 'tally-thank-you-message';
    message.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem 3rem;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border: 2px solid #ff8c3c;
        text-align: center;
        z-index: 10000;
        max-width: 400px;
        width: 90%;
      ">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✨</div>
        <h3 style="
          margin: 0 0 1rem 0;
          color: #1f2937;
          font-size: 1.5rem;
          font-weight: 600;
        ">Thank You!</h3>
        <p style="
          margin: 0 0 1.5rem 0;
          color: #6b7280;
          line-height: 1.6;
        ">Thanks for submitting! We'll get back to you as soon as possible.</p>
        <button onclick="closeThankYouMessage()" style="
          background: #ff8c3c;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        ">Got it!</button>
      </div>
      <div onclick="closeThankYouMessage()" style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
      "></div>
    `;

    document.body.appendChild(message);

    // Auto-close after 5 seconds
    setTimeout(() => {
      closeThankYouMessage();
    }, 5000);
  };

  const closeThankYouMessage = () => {
    const message = document.getElementById('tally-thank-you-message');
    if (message) {
      message.remove();
    }
  };

  // Make closeThankYouMessage available globally
  useEffect(() => {
    (window as any).closeThankYouMessage = closeThankYouMessage;
  }, []);

  const value = {
    isLoading,
    openTallyForm,
    buttonId
  };

  return (
    <TallyContext.Provider value={value}>
      {children}
    </TallyContext.Provider>
  );
}
