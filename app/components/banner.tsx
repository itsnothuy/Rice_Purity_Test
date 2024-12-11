
"use client";

// components/Banner.js
import React from 'react';

interface BannerProps {
    currentScore: number;
    totalScore: number;
  }

export default function Banner({ currentScore, totalScore }: BannerProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-10 shadow-md">
    <div className="max-w-4xl mx-auto flex items-center justify-center relative">
      <h1 className="text-quiz-title font-bold tracking-quiz-title text-center flex-1">
        Rice Purity Test
      </h1>
      <div className="absolute right-0 bg-quiz-text text-quiz-background text-quiz-score px-2 rounded-full font-medium border border-white shadow-quiz-score">
        {currentScore} / {totalScore}
      </div>
    </div>
  </header>
  );
}
