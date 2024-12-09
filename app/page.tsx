"use client";

import { useState } from 'react';

export default function HomePage() {
  const questions: string[] = [
    "Held hands romantically?",
    "Been on a date?",
    "Been in a relationship?",
    "Danced without leaving room for Jesus?",
    "Kissed a non-family member?",
    "Kissed a non-family member on the lips?",
    "French kissed?",
    "French kissed in public?",
    "Kissed on the neck?",
    "Kissed horizontally?",
    "Given or received a hickey?",
    // ... add as many as needed
  ];

  // Explicitly type `checkedItems` as an array of strings
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  // Type the parameter in the `toggleCheck` function
  const toggleCheck = (question: string): void => {
    setCheckedItems((prev) =>
      prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]
    );
  };

  return (
    <div className="bg-quiz-bg min-h-screen text-quiz-text font-quiz relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-quiz-highlight text-white p-4 shadow-md flex flex-col items-center z-50">
        <h1 className="text-2xl font-bold">Rice Purity Test</h1>
        <div className="text-center mt-2">
          Welcome to the updated Rice Purity Test.<br />
          Click on every experience you've had. MPS = Member of the Preferred Sex.
        </div>
        <div className="mt-2 font-bold text-white">
          {checkedItems.length} / {questions.length}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-4 max-w-md mx-auto">
        <p className="text-sm text-gray-500 mb-4">
          Note: This is not a bucket list. Attempting to check off every item could lead to serious, even fatal, consequences.
        </p>

        <div className="space-y-4">
          {questions.map((q, idx) => (
            <label
              key={idx}
              className="flex items-center space-x-3 bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checkedItems.includes(q)}
                onChange={() => toggleCheck(q)}
                className="h-6 w-6 accent-quiz-highlight"
              />
              <span className="text-gray-700">
                {idx + 1}. {q}
              </span>
            </label>
          ))}
        </div>
      </main>
    </div>
  );
}
